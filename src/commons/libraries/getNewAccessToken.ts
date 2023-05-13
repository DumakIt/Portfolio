import { IMutation } from "./../types/generated/types";
import { gql, GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken {
      accessToken
    }
  }
`;

export const getNewAccessToken = async (): Promise<string | undefined> => {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend-practice.codebootcamp.co.kr/graphql",
      // "https://backend11.codebootcamp.co.kr/graphql04",
      { credentials: "include" }
    );
    const result = await graphQLClient.request<
      Pick<IMutation, "restoreAccessToken">
    >(RESTORE_ACCESS_TOKEN);

    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message, "에러메세지");
  }
};
