import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
	const router = useRouter();
	const [isActive, setIsActive] = useState(false);
	const [createBoard] = useMutation(CREATE_BOARD);

	const [writer, setWriter] = useState("");
	const [password, setPassword] = useState("");
	const [title, setTitle] = useState("");
	const [contents, setContetnts] = useState("");

	const [writerError, setWriterError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [titleError, setTitleError] = useState("");
	const [contentsError, setContentsError] = useState("");

	const onChangeWriter = (event) => {
		setWriter(event.target.value);
		if (event.target.value !== "") {
			setWriterError("");
		}

		if (writer && password && title && contents) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	};

	const onChangePassword = (event) => {
		setPassword(event.target.value);
		if (event.target.value !== "") {
			setPasswordError("");
		}

		if (writer && password && title && contents) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	};

	const onChangeTitle = (event) => {
		setTitle(event.target.value);
		if (event.target.value !== "") {
			setTitleError("");
		}

		if (writer && password && title && contents) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	};

	const onChangeContents = (event) => {
		setContetnts(event.target.value);
		if (event.target.value !== "") {
			setContentsError("");
		}

		if (writer && password && title && contents) {
			setIsActive(true);
		} else {
			setIsActive(false);
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
				const result = await createBoard({
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
				router.push(`/boards/${result.data.createBoard._id}`);
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
			isActive={isActive}
		/>
	);
}
