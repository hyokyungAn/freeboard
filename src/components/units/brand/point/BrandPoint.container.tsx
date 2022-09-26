import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import Head from "next/head";
import { useState } from "react";
import BrandPointUI from "./BrandPoint.presenter";
import { CREATE_POINT_TRANSACTION_OF_LOADING } from "./BrandPoint.queries";
import { IBrandPointProps } from "./BrandPoint.types";

declare const window: typeof globalThis & {
	IMP: any;
};

export default function BrandPoint(props: IBrandPointProps) {
	const [selected, setSelected] = useState(0);

	const [createPointTransactionOfLoading] = useMutation(
		CREATE_POINT_TRANSACTION_OF_LOADING
	);

	const onChangeAmount = (value: string) => {
		setSelected(Number(value));
	};

	const requestPay = () => {
		const IMP = window.IMP;
		IMP.init("imp49910675");

		IMP.request_pay(
			{
				pg: "html5_inicis",
				pay_method: "card",
				name: "포인트 충전",
				amount: selected,
			},
			async (rsp: any) => {
				if (rsp.success) {
					await createPointTransactionOfLoading({
						variables: {
							impUid: rsp.imp_uid,
						},
					});
					props.handleCancel();
					await props.refetch();
					Modal.success({ content: "결제가 완료되었습니다!!" });
				} else {
					Modal.error({ content: "결제에 실패했습니다! 다시 시도해 주세요!" });
				}
			}
		);
	};

	return (
		<div>
			<Head>
				<script
					type="text/javascript"
					src="https://code.jquery.com/jquery-1.12.4.min.js"
				></script>
				<script
					type="text/javascript"
					src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
				></script>
			</Head>

			<BrandPointUI
				selected={selected}
				onChangeAmount={onChangeAmount}
				requestPay={requestPay}
				handleCancel={props.handleCancel}
			></BrandPointUI>
		</div>
	);
}
