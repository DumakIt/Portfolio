import styled from "@emotion/styled";

export const TitleInput = styled.input`
  width: 100%;
  height: 50px;
  margin: 15px 0;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #d9d9d9;

  &:focus {
    outline: 1px solid #4096ff;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const DeleteBtn = styled.button`
  padding: 6px 10px;
  color: #ff4d4f;
  border-radius: 6px;
  border: 1px solid #ff4d4f;
  background-color: white;
  margin-right: 10px;
  cursor: pointer;
`;

export const UpdateBtn = styled.button`
  padding: 8px 10px;
  color: white;
  border: none;
  border-radius: 6px;
  background-color: #4096ff;
  cursor: pointer;
`;
