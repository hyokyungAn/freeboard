import React, {
	ChangeEvent,
	Dispatch,
	MouseEvent,
	SetStateAction,
	useEffect,
	KeyboardEvent,
} from "react";
import styled from "@emotion/styled";

interface ITagProps {
	tagList: string[];
	setTagList: Dispatch<SetStateAction<string[]>>;
	setTagItem: Dispatch<SetStateAction<string>>;
	data?: {
		fetchUseditem: IFetchUseditem;
	};
	tagItem: string;
	defaultValue?: string[];
}

export interface IFetchUseditem {
	_id: string;
	name: string;
	remarks: string;
	contents: string;
	price: number;
	tags: string[];
	useditemAddress: {
		zipcode: string;
		address: string;
		addressDetail: string;
		lat: number;
		lng: number;
	};
	images: string[];
}

export default function Tag(props: ITagProps) {
	const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		const target = event.target as HTMLInputElement;
		if (event.key === "Enter") {
			console.log(event);
			if (target.value === "") return;
			//처음에 입력한 값
			if (props.tagList === undefined) {
				props.setTagList([target.value]);
				props.setTagItem("");
			} else {
				//추가로 입력한 값
				props.setTagList((prev: string[]) => [...prev, target.value]);
				// addList.filter((tagList: any) => tagList !== e.target.value);
				props.setTagItem("");
			}
		}
	};

	const deleteTagItem = (event: MouseEvent<HTMLButtonElement>) => {
		const deleteTagItem =
			event.currentTarget.parentElement?.firstChild?.textContent;
		const filteredTagList = props.tagList.filter(
			(tagItem: string) => tagItem !== deleteTagItem
		);
		props.setTagList(filteredTagList);
	};

	const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
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
			{props.tagList?.map((tagItem: string, index: number) => {
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
				onKeyDown={onKeyDown}
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
