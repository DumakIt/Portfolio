import { Tabs } from "antd";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { PhotoAlbum } from "react-photo-album";
import { useRecoilState } from "recoil";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { catGalleryUserIdState } from "../../../../commons/stores";
import * as S from "./saveGalleryStyles";

export default function SaveGallery(): JSX.Element {
  const [catGalleryUserId] = useRecoilState(catGalleryUserIdState);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectCategory, setSelectCategory] = useState("");
  const [catImgs, setCatImgs] = useState<any[]>([]);

  // 카테고리 조회
  useEffect(() => {
    if (catGalleryUserId !== "") {
      const fetchCategory = async (): Promise<void> => {
        const accessDB = collection(
          getFirestore(firebaseApp),
          catGalleryUserId
        );
        const result = await getDocs(
          query(accessDB, orderBy("timestamp", "asc"))
        );
        const datas = result.docs.map((el) => el.data());
        setCategories(datas);
      };
      void fetchCategory();
    }
  }, [catGalleryUserId]);

  // 해당 카테고리의 저장한 이미지 조회
  useEffect(() => {
    if (catGalleryUserId !== "") {
      const fetchSaveImg = async (): Promise<void> => {
        const accessDB = collection(
          getFirestore(firebaseApp),
          catGalleryUserId,
          selectCategory === "" ? categories[0].label : selectCategory,
          selectCategory === "" ? categories[0].label : selectCategory
        );
        const result = await getDocs(
          query(accessDB, orderBy("timestamp", "asc"))
        );
        const datas = result.docs.map((el) => el.data());
        setCatImgs(datas);
      };
      void fetchSaveImg();
    }
  }, [selectCategory, categories]);

  return (
    <S.Container>
      <Tabs
        tabPosition={"left"}
        onChange={(event) => {
          setSelectCategory(event);
        }}
        items={categories.map((el, idx) => {
          return {
            label: el.label,
            key: el.label,
            children: (
              <PhotoAlbum
                layout="columns"
                photos={catImgs}
                columns={3}
                onClick={(e) => {
                  console.log(e);
                }}
              />
            ),
          };
        })}
      />
    </S.Container>
  );
}
