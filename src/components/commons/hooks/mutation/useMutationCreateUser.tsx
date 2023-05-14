import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { IMutation, IMutationCreateUserArgs } from "../../../../commons/types/generated/types";
import { useRouterMovePage } from "../custom/useRouterMovePage";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      name
    }
  }
`;

export const useMutationCreateUser = () => {
  const [mutation] = useMutation<Pick<IMutation, "createUser">, IMutationCreateUserArgs>(CREATE_USER);
  const { routerMovePage } = useRouterMovePage();

  const createUser = async (data: { email: string; password: string; name: string }) => {
    try {
      const result = await mutation({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.password,
            name: data.name,
          },
        },
      });

      Modal.success({
        content: `${result.data?.createUser.name}님 회원이 되신걸 환영합니다~`,
        onOk() {
          routerMovePage("/final/login");
        },
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          title: error.message,
          content: "확인후 다시 입력해 주세요",
        });
    }
  };
  return { createUser };
};
