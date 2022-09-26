import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LOGIN_USER } from "./login.queries";
import LoginUI from "./login.presenter";
import { Modal } from "antd";
import { ILoginUser } from "./login.types";

const schema = yup.object({
	email: yup
		.string()
		.email("이메일 아이디를 @까지 정확하게 입력하세요")
		.required(""),
	password: yup
		.string()
		.required("")
		.matches(
			/^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,16}$/,
			"영문+숫자 조합 8~16자리를 입력해주세요."
		),
});

export default function Login() {
	const { register, handleSubmit, formState } = useForm<ILoginUser>({
		resolver: yupResolver(schema),
		mode: "onChange",
	});
	const router = useRouter();
	const [, setAccessToken] = useRecoilState(accessTokenState);

	const [loginUser] = useMutation(LOGIN_USER);

	const onClickLogin = async (data: ILoginUser) => {
		try {
			const result = await loginUser({
				variables: {
					email: data.email,
					password: data.password,
				},
			});
			const accessToken = result.data?.loginUser.accessToken;
			setAccessToken(accessToken);
			router.push("/");
		} catch (error) {
			Modal.error({ content: (error as Error).message });
		}
	};

	return (
		<LoginUI
			handleSubmit={handleSubmit}
			onClickLogin={onClickLogin}
			register={register}
			formState={formState}
		/>
	);
}
