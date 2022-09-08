import { Select } from "antd";
import * as S from "./BrandPoint.styles";
import { IBrandPointUIProps } from "./BrandPoint.types";

export default function BrandPointUI(props: IBrandPointUIProps) {
	return (
		<S.Wrapper>
			<S.Modal>
				<S.Text>충전하실 금액을 선택해주세요!</S.Text>
				<Select
					onChange={props.onChangeAmount}
					style={{ width: "384px" }}
					defaultValue="포인트 선택"
				>
					<option value="100">100</option>
					<option value="500">500</option>
					<option value="2000">2000</option>
					<option value="5000">5000</option>
				</Select>
				<S.ButtonWrapper>
					<S.Button onClick={props.requestPay} selected={props.selected}>
						충전하기
					</S.Button>
				</S.ButtonWrapper>
				<S.CancelButton onClick={props.handleCancel}>✕</S.CancelButton>
			</S.Modal>
		</S.Wrapper>
	);
}
