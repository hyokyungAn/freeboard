import { Searchbar, SearchbarInput } from "./Searchbar.styles";
import { ISearchbarUIProps } from "./Searchbar.types";

export default function SearchbarUI(props: ISearchbarUIProps) {
	return (
		<Searchbar>
			<SearchbarInput
				src="/images/search.png"
				onChange={props.onChangeSearchbar}
			/>
		</Searchbar>
	);
}
