import { Dispatch, SetStateAction } from "react";
import {
	FormState,
	UseFormHandleSubmit,
	UseFormRegister,
} from "react-hook-form";

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
	data?: any;
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
	getValues: any;
	titleError?: any;
	onClickSubmit: (data: IForm) => void;
	onClickUpdate: (data: IForm) => void;
	onClickCancel: () => void;
	onClickAddressSearch: () => void;
	onChangeFileUrls: (fileUrls: string, index: number) => void;
	onChangeContents: (contents: string) => void;
	onChangeRemarks: (value: string) => void;
	onCompleteAddressSearch: (data: any) => void;
	onToggleModal: () => void;
}
