import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent } from "react";

export interface ISearchbarProps {
	refetch: any;

	onChangeKeyword: (value: string) => void;
}

export interface ISearchbarUIProps {
	onChangeSearchbar: (event: ChangeEvent<HTMLInputElement>) => void;
}
