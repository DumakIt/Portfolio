import styled from "@emotion/styled";

interface IImgWrapperProps {
  isImg: boolean;
}

export const Container = styled.section`
  gap: 50px 20px;
  width: 1600px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ItemWrapper = styled.div`
  width: calc(20% - 16px);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  aspect-ratio: 5 / 6;
  background-color: ${(props: IImgWrapperProps) =>
    props.isImg ? "" : `hsl(${Math.floor(Math.random() * 360)}, 100%, 80%)`};
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ContentsWrapper = styled.div`
  padding: 20px;

  & > div:first-of-type {
    font-size: 22px;
  }
`;

export const ContentsBottomWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  & > div:first-of-type {
    font-weight: 600;
    font-size: 28px;
  }

  & > div:last-of-type {
    color: #757575;
  }
`;
