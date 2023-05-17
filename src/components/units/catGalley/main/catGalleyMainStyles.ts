import styled from "@emotion/styled";
import Link from "next/link";

export const Container = styled.div`
  position: relative;
  width: 1200px;
  margin: 70px auto 0;

  & img:hover {
    outline: 5px solid #4096ff;
    transition: all 0.1s linear;
  }
`;

export const Title = styled.h1`
  margin-bottom: 15px;
  text-align: center;
`;

export const LoadingImg = styled.h2`
  margin: 0 15px;
  text-align: center;
`;

export const SavedImgBtn = styled(Link)`
  position: absolute;
  top: -20px;
  right: -250px;
  width: 150px;
  height: 70px;
  color: black;
  font-size: 22px;
  line-height: 70px;
  text-align: center;
  text-decoration: none;
  border: 3px solid #4096ff;
  border-radius: 10px;
`;
