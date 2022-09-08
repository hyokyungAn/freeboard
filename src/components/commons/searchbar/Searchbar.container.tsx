import { ChangeEvent } from "react";
import { ISearchbarProps } from "./Searchbar.types";
import _ from "lodash";
import SearchbarUI from "./Searchbar.presenter";

export default function Searchbar(props: ISearchbarProps) {
	const getDebounce = _.debounce((data: string) => {
		props.refetch({ search: data, page: 1 });
		props.onChangeKeyword(data);
	}, 200);

	function onChangeSearchbar(event: ChangeEvent<HTMLInputElement>) {
		getDebounce(event.target.value);
	}

	return <SearchbarUI onChangeSearchbar={onChangeSearchbar} />;
}
