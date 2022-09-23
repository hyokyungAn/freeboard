import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { CREATE_USER } from "./Join.queries";
import JoinUI from "./Join.presenter";
import { Modal } from "antd";

const schema = yup.object({
	email: yup
		.string()
		.email("이메일 형식이 적합하지 않습니다.")
		.required("이메일은 필수 입력입니다."),
	password: yup
		.string()
		.required("비밀번호는 필수 입력입니다.")
		.matches(
			/^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,16}$/,
			"영문+숫자 조합 8~16자리를 입력해주세요."
		),
	passwordCheck: yup
		.string()
		.required("비밀번호를 확인해주세요.")
		.oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
	name: yup.string().required("이름은 필수 입력입니다."),
});

export default function Join() {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(schema),
		mode: "onChange",
	});
	const router = useRouter();
	const [createUser] = useMutation(CREATE_USER);

	const onClickJoin = async (data: any) => {
		try {
			const result = await createUser({
				variables: {
					createUserInput: {
						email: data.email,
						password: data.password,
						name: data.name,
					},
				},
			});
			Modal.success({ content: "회원가입이 완료되었습니다." });
			router.push("/login");
		} catch (error) {
			Modal.error({ content: (error as Error).message });
		}
	};

	return (
		<JoinUI
			register={register}
			handleSubmit={handleSubmit}
			formState={formState}
			onClickJoin={onClickJoin}
		/>
	);
}
