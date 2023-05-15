import { gql, useMutation } from "@apollo/client";
import { useRef } from "react";
import * as S from "./imgUpload.styles";

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImgUpload(args) {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const imgRef = useRef(null);

  const onClickImg = () => {
    imgRef.current?.click();
  };

  const onChangeImg = async (event) => {
    const file = event.currentTarget.files?.[0];
    if (file === undefined) return;

    const result = await uploadFile({
      variables: {
        file,
      },
    });

    args.setImages((prev) => ({ ...prev, [args.idx]: result.data?.uploadFile.url }));

    if (Object.values(args.images).length - 1 === args.idx) {
      args.setImages((prev) => ({ ...prev, [args.idx + 1]: "" }));
    }
  };

  return (
    <div>
      {args.images[args.idx] !== "" ? <S.Img src={`https://storage.googleapis.com/${args.images[args.idx]}`} onClick={onClickImg} /> : <S.Img src="/images/addImg.png" onClick={onClickImg} />}

      <S.DisabledInput type="file" ref={imgRef} onChange={onChangeImg} accept="image/jpeg, image/png" />
    </div>
  );
}
