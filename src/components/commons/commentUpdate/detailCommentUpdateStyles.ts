import styled from "@emotion/styled";

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

export const CommentUpdateBtnWrapper = styled.div`
  margin-top: 11px;
  margin-bottom: 36px;
  width: 237px;
  height: 42px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CommentUpdateCanCel = styled.button`
  width: 116px;
  height: 42px;
  background: #ffffff;
  border: 1px solid #000000;
  font-weight: 700;
  font-size: 20px;
`;

export const CommentUpdateSubmit = styled.button`
  width: 116px;
  height: 42px;
  background: black;
  color: white;
  font-weight: 700;
  font-size: 20px;
  border: none;
`;
