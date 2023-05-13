import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/commons/apollo";
import Layout from "../src/components/commons/layout";
import "../styles/globals.css";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <>
          <Layout>
            <Component />
          </Layout>
        </>
      </ApolloSetting>
    </RecoilRoot>
  );
}
