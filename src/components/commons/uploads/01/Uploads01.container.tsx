import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { checkValidationImage } from "./Uploads01.validation";
import Uploads01UI from "./Uploads01.presenter";
import { IUploads01Props } from "./Uploads01.types";
import { UPLOAD_FILE } from "./Uploads01.queries";
import { Modal } from "antd";

export default function Uploads01(props: IUploads01Props) {
	const fileRef = useRef<HTMLInputElement>(null);
	const [uploadFile] = useMutation(UPLOAD_FILE);

	// onClickUpload를 실행하면 fileRef가 click 됨
	const onClickUpload = () => {
		fileRef.current?.click();
	};

	// input에 파일이 첨부될 경우 작동하는 함수
	const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
		// 이미지 적합성 체크 (Uploads01.validation.ts에서 함수 import)
		const file = checkValidationImage(event.target.files?.[0]);
		if (!file) return;

		try {
			// 첨부된 파일을 구글 스토리지에 업로드 후 url을 반환받음
			const result = await uploadFile({ variables: { file } });
			// BoardWrite에서 prop로 받아온 onchangeFileUrls 함수에
			// 스토리지에 업로드가 완료된 file의 url을 넘겨줌
			props.onChangeFileUrls(result.data.uploadFile.url, props.index);
		} catch (error: any) {
			Modal.error({ content: error.message });
		}
	};

	return (
		<Uploads01UI
			fileRef={fileRef}
			fileUrl={props.fileUrl}
			defaultFileUrl={props.defaultFileUrl}
			onClickUpload={onClickUpload}
			onChangeFile={onChangeFile}
		/>
	);
}
