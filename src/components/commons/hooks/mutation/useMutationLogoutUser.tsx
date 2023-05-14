import { gql, useMutation } from "@apollo/client";
import { IMutation } from "../../../../commons/types/generated/types";
import { FETCH_USER_LOGGED_IN } from "../query/useQueryFetchUserLoggedIn";

const LOGOUT_USER = gql`
  mutation {
    logoutUser
  }
`;

export const useMutationLogoutUser = () => {
  const [mutation] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);

  const logoutUser = async () => {
    await mutation();
    window.location.reload();
  };

  return { logoutUser };
};
