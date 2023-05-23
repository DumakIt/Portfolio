import styled from "@emotion/styled";
import Link from "next/link";

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
  margin-bottom: 15px;
  & > img {
    width: 100%;
    margin-bottom: 15px;
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

export const MovePageLink = styled(Link)`
  position: absolute;
  bottom: 15px;
  right: 10px;
  width: 120px;
  height: 50px;
  background-color: white;
  border: 1px solid #999999;
  border-radius: 10px;
  font-size: 16px;
  color: black;
  text-align: center;
  line-height: 50px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;
