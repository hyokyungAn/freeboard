import { useApolloClient, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./login.queries";
import LoginUI from "./login.presenter";
import { Modal } from "antd";

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
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(schema),
		mode: "onChange",
	});
	const router = useRouter();
	const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
	const [userInfo, setUserInfo] = useRecoilState(userInfoState);
	const client = useApolloClient();

	const [loginUser] = useMutation(LOGIN_USER);

	const onClickLogin = async (data: any) => {
		try {
			// 로그인하기
			const result = await loginUser({
				variables: { email: data.email, password: data.password },
			});
			const accessToken = result.data?.loginUser.accessToken;

			// 유저정보 가지고 오기
			const resultUserInfo = await client.query({
				query: FETCH_USER_LOGGED_IN,
				context: {
					headers: {
						Authorization: `Bearer ${accessToken}`,
					},
				},
			});

			// 글로벌스테이트에 저장하기
			const userInfo = resultUserInfo.data.fetchUserLoggedIn;
			setAccessToken(accessToken);
			setUserInfo(userInfo);
			localStorage.setItem("accessToken", accessToken);
			localStorage.setItem("userInfo", JSON.stringify(userInfo));
			router.push("/");
		} catch (error: any) {
			Modal.error({ content: error.message });
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
