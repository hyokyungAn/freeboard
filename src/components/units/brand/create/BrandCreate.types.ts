import { Dispatch, SetStateAction } from "react";
import {
	FormState,
	UseFormGetValues,
	UseFormHandleSubmit,
	UseFormRegister,
} from "react-hook-form";

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

export interface IBrandCreateProps {
	isEdit: boolean;
	data?: {
		fetchUseditem: IFetchUseditem;
	};
}

export interface IDaumPostCodeData {
	address: string;
	zonecode: string;
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
	data?: {
		fetchUseditem: IFetchUseditem;
	};
	register: UseFormRegister<IForm>;
	handleSubmit: UseFormHandleSubmit<IForm>;
	formState: FormState<IForm>;
	isEdit: boolean;
	isOpen: boolean;
	fileUrls: string[];
	tagItem: string;
	setTagItem: Dispatch<SetStateAction<string>>;
	tagList: string[];
	setTagList: Dispatch<SetStateAction<string[]>>;
	getValues: UseFormGetValues<IForm>;
	titleError?: string;
	onClickSubmit: (data: IForm) => void;
	onClickUpdate: (data: IForm) => void;
	onClickCancel: () => void;
	onClickAddressSearch: () => void;
	onChangeFileUrls: (fileUrls: string, index: number) => void;
	onChangeContents: (contents: string) => void;
	onChangeRemarks: (value: string) => void;
	onCompleteAddressSearch: (data: IDaumPostCodeData) => void;
	onToggleModal: () => void;
}
