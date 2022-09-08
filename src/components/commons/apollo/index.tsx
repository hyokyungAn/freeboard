import {
	ApolloClient,
	ApolloLink,
	ApolloProvider,
	InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

interface IApolloSettingProps {
	children: any;
}

export default function ApolloSetting(props: IApolloSettingProps) {
	const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
	const [check, setCheck] = useState(false);

	useEffect(() => {
		getAccessToken().then((newAccessToken: string) => {
			setAccessToken(newAccessToken);
			setCheck(true);
		});
	}, []);

	const errorLink = onError(({ graphQLErrors, operation, forward }) => {
		if (graphQLErrors) {
			for (const err of graphQLErrors) {
				if (err.extensions.code === "UNAUTHENTICATED") {
					getAccessToken().then((newAccessToken) => {
						setAccessToken(newAccessToken);

						operation.setContext({
							headers: {
								...operation.getContext().headers,
								Authorization: `Bearer ${newAccessToken}`,
							},
						});
						return forward(operation);
					});
				}
			}
		}
	});

	const uploadLink = createUploadLink({
		uri: "https://backend07.codebootcamp.co.kr/graphql",
		headers: { Authorization: `Bearer ${accessToken}` },
		credentials: "include",
	});
	const client = new ApolloClient({
		link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
		cache: new InMemoryCache(),
		connectToDevTools: true,
	});

	return (
		check && <ApolloProvider client={client}>{props.children}</ApolloProvider>
	);
}
