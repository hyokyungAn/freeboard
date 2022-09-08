import { ApolloQueryResult, OperationVariables } from "@apollo/client";

export interface IBrandRecommentListProps {}

export interface IBrandRecommentListUIProps {
	recommentData: string;
	refetch(
		variables?: Partial<OperationVariables> | undefined
	): Promise<ApolloQueryResult<any>>;
	onClickDelete: () => void;
}
