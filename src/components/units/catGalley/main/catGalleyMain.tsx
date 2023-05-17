import InfiniteScroll from "react-infinite-scroller";
import { PhotoAlbum } from "react-photo-album";
import { useGetCatImg } from "../../../commons/hooks/custom/useGetCatImg";
import * as S from "./catGalleyMainStyles";
import { useSetIsToggle } from "../../../commons/hooks/custom/useSetIsToggle";
import SaveCatModal from "../../../commons/catGalley/saveCatModal/saveCatModal";
import { useState } from "react";

export default function CatGalleyMain(): JSX.Element {
  const { catImgs, axiosCatImg } = useGetCatImg();
  const [isToggle, changeIsToggle] = useSetIsToggle();
  const [selectCat, setSelectCat] = useState<{
    src?: string;
    width?: number;
    height?: number;
  }>({});

  return (
    <S.Container>
      <S.Title>사진을 클릭해 저장해 보세요!</S.Title>
      <InfiniteScroll
        loadMore={() => {
          void axiosCatImg();
        }}
        hasMore={true}
        loader={<S.LoadingImg>Loading ...</S.LoadingImg>}
      >
        <PhotoAlbum
          layout="masonry"
          photos={catImgs}
          columns={3}
          onClick={({ photo }) => {
            setSelectCat(photo);
            changeIsToggle();
          }}
        />
      </InfiniteScroll>
      <S.SavedImgBtn href={"/catGallery/saveGallery"}>
        저장한 이미지
      </S.SavedImgBtn>

      {isToggle && (
        <SaveCatModal changeIsToggle={changeIsToggle} selectCat={selectCat} />
      )}
    </S.Container>
  );
}
