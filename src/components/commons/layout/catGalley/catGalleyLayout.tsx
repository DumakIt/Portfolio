import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRecoilState } from "recoil";
import { catGalleryUserIdState } from "../../../../commons/stores";
import { useRouterMovePage } from "../../hooks/custom/useRouterMovePage";
import * as S from "./catGalleyLayoutStyles";
import { doc, getFirestore, setDoc } from "firebase/firestore/lite";
import { firebaseApp } from "../../../../commons/libraries/firebase";

export default function CatGalleyLayout(): JSX.Element {
  const { onClickMovePage } = useRouterMovePage();
  const [, setCatGalleryUserId] = useRecoilState(catGalleryUserIdState);

  useEffect(() => {
    const catGalleryUserId = localStorage.getItem("catGalleryUserId");
    if (catGalleryUserId === null) {
      const newCatGalleryUserId = uuidv4();
      localStorage.setItem("catGalleryUserId", newCatGalleryUserId);
      setCatGalleryUserId(newCatGalleryUserId);
      const onClickAddCategory = async (): Promise<void> => {
        const newCategory = {
          value: "저장한 이미지",
          label: "저장한 이미지",
          timestamp: Date(),
        };

        const accessDB = doc(
          getFirestore(firebaseApp),
          newCatGalleryUserId,
          "저장한 이미지"
        );
        await setDoc(accessDB, newCategory);
      };
      void onClickAddCategory();
    } else {
      setCatGalleryUserId(catGalleryUserId);
    }
  }, []);

  return (
    <S.Container>
      <S.LogoWrapper onClick={onClickMovePage("/catGallery")}>
        <img src="/images/catGallery/logo.svg" />
      </S.LogoWrapper>
    </S.Container>
  );
}
