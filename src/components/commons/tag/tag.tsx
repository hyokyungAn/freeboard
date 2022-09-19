import React, { useEffect } from "react";
import styled from "@emotion/styled";

interface ITagProps {
	tagList: any;
	setTagList: any;
	setTagItem: any;
	data: any;
	tagItem: any;
	defaultValue: any;
}

export default function Tag(props: ITagProps) {
	const onKeyPress = (event: any) => {
		if (event.key === "Enter") {
			if (event.target.value === "") return;
			//처음에 입력한 값
			if (props.tagList === undefined) {
				props.setTagList([event.target.value]);
				props.setTagItem("");
			} else {
				//추가로 입력한 값
				props.setTagList((prev: any) => [...prev, event.target.value]);
				// addList.filter((tagList: any) => tagList !== e.target.value);
				props.setTagItem("");
			}
		}
	};

	const deleteTagItem = (event: any) => {
		const deleteTagItem = event.target.parentElement.firstChild.innerText;
		const filteredTagList = props.tagList.filter(
			(tagItem: any) => tagItem !== deleteTagItem
		);
		props.setTagList(filteredTagList);
	};

	const onChangeInput = (event: any) => {
		props.setTagItem(event.target.value);
	};

	//수정시 map대신 useEffect
	useEffect(() => {
		if (props.data?.fetchUseditem !== undefined)
			props.setTagList([...props.data?.fetchUseditem.tags]);
	}, [props.data]);

	return (
		<TagBox>
			{/* 등록시 map */}
			{props.tagList?.map((tagItem: any, index: number) => {
				return (
					<TagItem key={index}>
						<Text>{tagItem}</Text>
						<Button type="button" onClick={deleteTagItem}>
							X
						</Button>
					</TagItem>
				);
			})}
			<TagInput
				type="text"
				placeholder="태그를 입력해주세요."
				tabIndex={2}
				onChange={onChangeInput}
				value={props.tagItem}
				onKeyPress={onKeyPress}
			/>
		</TagBox>
	);
}

const TagBox = styled.div`
	background-color: #e9e9e9;
	width: 100%;
	display: flex;
	align-items: center;
	flex-wrap: wrap;

	:focus-within {
		border-color: tomato;
	}
`;

const TagItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 5px;
	padding: 5px;
	background-color: tomato;
	border-radius: 5px;
	color: white;
	font-size: 13px;
`;

const Text = styled.span``;

const Button = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 15px;
	height: 15px;
	margin-left: 5px;
	border-radius: 50%;
	color: tomato;
`;

const TagInput = styled.input`
	background: transparent;
	border: none;
	outline: none;
	height: 45px;
	padding-left: 15px;

	::placeholder {
		color: #c0c0c0;
		font-size: small;
		transition: all 0.3s ease-in-out;
	}
`;
