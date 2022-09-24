export interface IHomeMainUIProps {
	data?: {
		fetchUseditems: IFetchUseditems[];
	};
	pickList: {
		fetchUseditemsIPicked: IFetchUseditemsIPicked[];
	};
}

export interface IFetchUseditems {
	_id: string;
	name: string;
	remarks: string;
	contents: string;
	price: number;
	seller: {
		name: string;
	};
	useditemAddress: {
		address: string;
		addressDetail: string;
	};
	images: string[];
	pickedCount: number;
	tags: string[];
	__typename: string;
}

export interface IFetchUseditemsIPicked {
	_id: string;
	pickedCount: number;
}
