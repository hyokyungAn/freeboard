import { ChangeEvent, FormEventHandler } from "react";
import { UseFormRegister } from "react-hook-form";

export interface IBrandCreateProps {
	isEdit: boolean;
	data?: any;
}

export interface IUpdateBrandInput {
	title?: string;
	contents?: string;
	youtubeUrl?: string;
	boardAddress?: {
		zipcode?: string;
		address?: string;
		addressDetail?: string;
	};
	images?: string[];
}

export interface ISubmitButtonProps {
	isActive: boolean;
}

export interface IForm {
	name: string;
	remarks: string;
	contents: string;
	price: number;
	address: string;
	addressDetail: string;
	tags: string[];
	zipcode: string;
	lat: number;
	lng: number;
}

export interface IBrandCreateUIProps {
	register: UseFormRegister<IForm>;
	isActive: boolean;
	formState: string;
	writerError: string;
	passwordError: string;
	titleError: string;
	contentsError: string;
	onChangeFileUrls: (fileUrls: string, index: number) => void;
	onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
	onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
	onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
	onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
	onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
	onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
	onClickAddressSearch: () => void;
	onCompleteAddressSearch: (data: any) => void;
	onClickSubmit: () => void;
	onClickUpdate: () => void;
	onClickCancel: () => void;
	isEdit: boolean;
	data?: any;
	isOpen: boolean;
	zipcode: string;
	address: string;
	addressDetail: string;
	fileUrls: string[];
	tagItem: string;
	setTagItem: string;
	tagList: string;
	setTagList: string;
}
