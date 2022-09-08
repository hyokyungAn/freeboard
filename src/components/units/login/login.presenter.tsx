import GrayInput from "../../commons/inputs/gray-input";
import * as S from "./login.styles";
import { ILoginProps } from "./login.types";

export default function LoginUI(props: ILoginProps) {
	return (
		<S.Wrapper onSubmit={props.handleSubmit(props.onClickLogin)}>
			<S.Title>LOGIN</S.Title>
			<S.line />
			<S.InnerWrapper>
				<S.Inner>
					<S.InputWrapper>
						<S.Text>아이디</S.Text>
						<GrayInput
							type="text"
							register={props.register("email")}
							placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
						/>
					</S.InputWrapper>
					<S.Error>{props.formState.errors.email?.message}</S.Error>
					<S.InputWrapper>
						<S.Text>비밀번호</S.Text>
						<GrayInput
							type="password"
							register={props.register("password")}
							placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
						/>
					</S.InputWrapper>
					<S.Error>{props.formState.errors.password?.message}</S.Error>
				</S.Inner>
				<S.LoginButtonWrapper>
					<S.LoginButton isActive={props.formState.isValid}>
						로그인
					</S.LoginButton>
				</S.LoginButtonWrapper>
			</S.InnerWrapper>
		</S.Wrapper>
	);
}
