import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";

function MyApp({ Component, pageProps }: any) {
	return (
		<RecoilRoot>
			<ApolloSetting>
				<Global styles={globalStyles} />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ApolloSetting>
		</RecoilRoot>
	);
}
export default MyApp;
