import { CloseOutlined, EditFilled } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 70px auto 0;
`;

export const ImgWrapper = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ItemInfoWrapper = styled.div`
  position: relative;
  width: calc(100% - 400px);
  padding: 35px 0 0 70px;
`;

export const FuncBtnBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const ItemBtnUpdate = styled(EditFilled)`
  margin-right: 16px;
  font-size: 24px;
  cursor: pointer;
`;

export const ItemBtnDelete = styled(CloseOutlined)`
  cursor: pointer;
  font-size: 24px;
`;

export const ItemName = styled.div`
  padding: 5px;
  font-weight: 700;
  font-size: 24px;
`;

export const ItemPrice = styled.div`
  padding: 5px;
  margin-top: 51px;
  font-weight: 500;
  font-size: 40px;
  & > span {
    font-weight: 400;
    font-size: 20px;
  }
`;

export const Line = styled.div`
  border-bottom: 1px solid #c0c0c0;
  margin-top: 40px;
  margin-bottom: 35px;
`;

export const BuyBtn = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 300px;
  height: 100px;
  background: #000000;
  font-weight: 700;
  font-size: 30px;
  color: #ffffff;
  border: none;
`;
