import { UserOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 385px;
`;

export const SellerInfoTitle = styled.div`
  font-weight: 700;
  font-size: 32px;
`;

export const SellerInfoWrapper = styled.div`
  margin-top: 30px;
  border-top: 3px solid #555555;
  border-bottom: 1px solid #555555;
  height: 140px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 19px;
`;

export const SellerIconBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid black;

  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const SellerDefaultIcon = styled(UserOutlined)`
  font-size: 40px;
  text-align: center;
`;

export const SellerName = styled.div`
  font-weight: 400;
  font-size: 32px;
  margin-left: 33px;
`;

export const CommentTitle = styled.div`
  font-weight: 700;
  font-size: 32px;
  margin-top: 76px;
`;

export const Line = styled.div`
  border-bottom: 3px solid #555555;
  margin-top: 32px;
  margin-bottom: 29px;
`;

export const CommentTextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 379px;
  height: 200px;
  padding: 3px;
  & > textarea {
    background: #e9e9e9;
    resize: none;
    border: none;
    width: 100%;
    height: 147px;
    font-weight: 400;
    font-size: 18px;
    padding: 10px;
    :focus {
      outline: none;
    }
  }
`;

export const CommentWriteBtn = styled.button`
  margin-top: 11px;
  width: 116px;
  height: 42px;
  border: none;
  font-weight: 700;
  font-size: 20px;
  background: black;
  color: white;
  cursor: pointer;
`;

export const CommentsContainer = styled.div`
  margin-top: 55px;
`;
