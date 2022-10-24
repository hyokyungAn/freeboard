import { useMutation } from "@apollo/client";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
	const [writer, setWriter] = useState("");
	const [password, setPassword] = useState("");
	const [title, setTitle] = useState("");
	const [contents, setContetnts] = useState("");

	const [writerError, setWriterError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [titleError, setTitleError] = useState("");
	const [contentsError, setContentsError] = useState("");

	const [createBoard] = useMutation(CREATE_BOARD);

	const onChangeWriter = (event) => {
		setWriter(event.target.value);
		if (event.target.value !== "") {
			setWriterError("");
		}
	};

	const onChangePassword = (event) => {
		setPassword(event.target.value);
		if (event.target.value !== "") {
			setPasswordError("");
		}
	};

	const onChangeTitle = (event) => {
		setTitle(event.target.value);
		if (event.target.value !== "") {
			setTitleError("");
		}
	};

	const onChangeContents = (event) => {
		setContetnts(event.target.value);
		if (event.target.value !== "") {
			setContentsError("");
		}
	};

	const onClickSubmit = async () => {
		if (writer === "") {
			setWriterError("작성자를 입력해주세요.");
		}
		if (!password) {
			setPasswordError("비밀번호를 입력해주세요.");
		}
		if (!title) {
			setTitleError("제목을 입력해주세요.");
		}
		if (!contents) {
			setContentsError("내용을 입력해주세요.");
		}

		if (writer && password && title && contents) {
			try {
				await createBoard({
					variables: {
						createBoardInput: {
							writer,
							password,
							title,
							contents,
						},
					},
				});
				alert("게시물이 등록되었습니다.");
			} catch (error) {
				console.log((error as Error).message);
			}
		}
	};

	return (
		<BoardWriteUI
			writerError={writerError}
			passwordError={passwordError}
			titleError={titleError}
			contentsError={contentsError}
			onChangeWriter={onChangeWriter}
			onChangePassword={onChangePassword}
			onChangeTitle={onChangeTitle}
			onChangeContents={onChangeContents}
			onClickSubmit={onClickSubmit}
		/>
	);
}
