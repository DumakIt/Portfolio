import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as S from "./usedMarketWriteStyles";
import { IFinalWriteBodyProps } from "./usedMarketWriteTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./usedMarketWriteVaildation";
import { useRouterMovePage } from "../../../commons/hooks/custom/useRouterMovePage";
import { useMutationCreateUsedItem } from "../../../commons/hooks/mutation/useMutationCreateUsedItem";
import { useEffectSetImage } from "../../../commons/hooks/custom/useEffectSetImage";
import { useEffectSetFormImg } from "../../../commons/hooks/custom/useEffectSetFormImg";
import { useMutationUpdateUsedItem } from "../../../commons/hooks/mutation/useMutationUpdateUsedItem";
import KakaoMapWrite from "../../../commons/kakaoMapWrite/kakaoMapWrite";
import ImgUpload from "../../../commons/imgUpload/imgUpload.container";

export default function UsedMarketWrite(
  props: IFinalWriteBodyProps
): JSX.Element {
  const [images, setImages] = useState({ 0: "" });
  const { onClickMovePage } = useRouterMovePage();
  const { createUsedItem } = useMutationCreateUsedItem();
  const { handleSubmit, register, setValue, reset, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  useEffectSetImage({ setImages, data: props.data });
  useEffectSetFormImg({ setValue, images });
  const { updateUsedItem } = useMutationUpdateUsedItem();

  useEffect(() => {
    if (props.data?.fetchUseditem !== undefined) {
      reset();
      setValue("contents", props.data?.fetchUseditem?.contents ?? "");
      setValue("useditemAddress", {
        lat: props.data?.fetchUseditem.useditemAddress?.lat ?? "",
        lng: props.data?.fetchUseditem.useditemAddress?.lng ?? "",
      });
    } else {
      setValue("useditemAddress", {
        lat: 37.56682195069747,
        lng: 126.97865508922976,
      });
    }
  }, [props.data]);

  const onChangeQuill = (value: string): void => {
    setValue("contents", value === "<p></br></p>" ? "" : value);
  };

  return (
    <S.Container>
      <form
        onSubmit={handleSubmit(
          props.isEdit ? updateUsedItem(props.id) : createUsedItem
        )}
      >
        <S.ContainerTitle>
          {props.isEdit ? "상품 수정" : "상품 등록"}
        </S.ContainerTitle>
        <S.Line></S.Line>
        <S.InputsWrapper>
          <S.InputsTitle>상품명</S.InputsTitle>
          <S.Inputs
            type="text"
            placeholder="상품명을 작성해주세요"
            defaultValue={props.data?.fetchUseditem?.name ?? ""}
            {...register("name")}
          />
        </S.InputsWrapper>
        <S.inValidInputs>{formState.errors.name?.message}</S.inValidInputs>
        <S.DetailWrapper>
          <S.Detail>상품내용</S.Detail>
          {props.isEdit ? (
            props.data ? (
              <S.CustomReactQuill
                placeholder="상품을 설명해주세요."
                defaultValue={props.data?.fetchUseditem?.contents}
                onChange={onChangeQuill}
              />
            ) : (
              <></>
            )
          ) : (
            <S.CustomReactQuill
              placeholder="상품을 설명해주세요."
              onChange={onChangeQuill}
            />
          )}
        </S.DetailWrapper>
        <S.inValidInputs>{formState.errors.contents?.message}</S.inValidInputs>
        <S.InputsWrapper>
          <S.InputsTitle>판매 가격</S.InputsTitle>
          <S.Inputs
            type="text"
            placeholder="판매 가격을 숫자만 작성해주세요"
            defaultValue={props.data?.fetchUseditem?.price ?? ""}
            {...register("price")}
          />
        </S.InputsWrapper>
        <S.inValidInputs>{formState.errors.price?.message}</S.inValidInputs>

        <KakaoMapWrite
          setValue={setValue}
          data={props.data?.fetchUseditem?.useditemAddress}
          isEdit={props.isEdit}
        />

        <S.ImgContainer>
          <S.ImgTitle>사진 첨부</S.ImgTitle>
          <S.ImgWrapper>
            {Object.values(images).map((_, idx) => (
              <ImgUpload
                key={idx}
                idx={idx}
                setImages={setImages}
                images={images}
              />
            ))}
          </S.ImgWrapper>
        </S.ImgContainer>
        <S.BottomLine></S.BottomLine>
        <S.BtnWrapper>
          <S.BtnCancel
            type="button"
            onClick={
              props.isEdit
                ? onClickMovePage(`/usedMarket/${props.id}/`)
                : onClickMovePage("/usedMarket")
            }
          >
            취소
          </S.BtnCancel>
          <S.BtnSubmit>등록</S.BtnSubmit>
        </S.BtnWrapper>
      </form>
    </S.Container>
  );
}
