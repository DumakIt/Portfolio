import styled from "@emotion/styled";

export const Container = styled.div`
  width: 925px;
`;

export const ItemInfoTitle = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

export const Line = styled.div`
  margin-top: 30px;
  border-top: 3px solid #555555;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin: 15px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ItemContents = styled.div`
  padding: 30px;
  font-weight: 400;
  font-size: 20px;
  word-break: break-all;
`;

export const SellLocationWrapper = styled.div`
  margin-top: 40px;
  padding: 30px;
`;

export const SellLocationTitle = styled.div`
  margin-bottom: 19px;
  display: flex;
  flex-direction: row;
  align-items: center;

  & > div {
    font-weight: 500;
    font-size: 24px;
    margin-left: 10px;
  }
`;
