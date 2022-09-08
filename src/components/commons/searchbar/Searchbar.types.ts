import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";
// import {
// 	IQuery,
// 	IQueryFetchBrandArgs,
// 	IQueryFetchBrandCountArgs,
// } from "../../../../../../codecamp_7_Anhyokyung/freeboard_frontend/src/commons/types/generated/types";

// export interface ISearchbarProps {
// 	refetch: (
// 		variables: Partial<IQueryFetchBrandArgs>
// 	) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBrand">>>;

// 	onChangeKeyword: (value: string) => void;
// }

export interface ISearchbarUIProps {
	onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}
