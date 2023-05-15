import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("상품명을 작성해주세요."),
  contents: yup.string().required("상품설명을 작성해주세요."),
  price: yup
    .number()
    .required("가격을 작성해 주세요")
    .typeError("숫자만 작성해주세요.")
    .positive("잘못된 가격입니다"),
});
