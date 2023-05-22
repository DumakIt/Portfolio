import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 30px;
`;

export const PageWrapper = styled.div`
  position: relative;
  width: 600px;
  padding: 10px;
`;

export const ImageBox = styled.div`
  width: 100%;
  margin-bottom: 15px;

  & > img {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 0 0.25em rgba(67, 71, 85, 0.27),
      0.2px 0.2em 24px 0 rgba(1, 29, 77, 0.15);
  }
`;

export const TextDiv = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
`;

export const ListUl = styled.ul`
  margin-left: 20px;
  font-size: 16px;
`;

export const MovePageBtn = styled.button`
  position: absolute;
  bottom: 15px;
  right: 10px;
  width: 120px;
  height: 50px;
  background-color: white;
  border: 1px solid #999999;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
`;
