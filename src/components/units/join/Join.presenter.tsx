import SmallButton from "../../commons/buttons/small";
import GrayInput from "../../commons/inputs/gray-input";
import * as S from "./Join.styles";
import { IJoinUIProps } from "./Join.types";

export default function JoinUI(props: IJoinUIProps) {
	return (
		<S.Wrapper onSubmit={props.handleSubmit(props.onClickJoin)}>
			<S.Title>JOIN MEMBER</S.Title>
			<S.line />
			<S.InnerWrapper>
				<S.Inner>
					<S.InputWrapper>
						<S.Text>아이디</S.Text>
						<S.InputErrorWrapper>
							<GrayInput
								type="text"
								register={props.register("email")}
								placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
							/>
							<S.Error>{props.formState.errors.email?.message}</S.Error>
						</S.InputErrorWrapper>
					</S.InputWrapper>
					<S.InputWrapper>
						<S.Text>비밀번호</S.Text>
						<S.InputErrorWrapper>
							<GrayInput
								type="password"
								register={props.register("password")}
								placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
							/>
							<S.Error>{props.formState.errors.password?.message}</S.Error>
						</S.InputErrorWrapper>
					</S.InputWrapper>
					<S.InputWrapper>
						<S.Text>비밀번호 확인</S.Text>
						<S.InputErrorWrapper>
							<GrayInput
								type="password"
								register={props.register("passwordCheck")}
								placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
							/>
							<S.Error>{props.formState.errors.passwordCheck?.message}</S.Error>
						</S.InputErrorWrapper>
					</S.InputWrapper>
					<S.InputWrapper>
						<S.Text>이름</S.Text>
						<S.InputErrorWrapper>
							<GrayInput
								type="text"
								register={props.register("name")}
								placeholder="ex) 홍길동"
							/>
							<S.Error>{props.formState.errors.name?.message}</S.Error>
						</S.InputErrorWrapper>
					</S.InputWrapper>
				</S.Inner>
			</S.InnerWrapper>
			<S.line />
			<S.ButtonWrapper>
				<SmallButton title="취소" />
				<SmallButton isActive={props.formState.isValid} title="확인" />
			</S.ButtonWrapper>
		</S.Wrapper>
	);
}
