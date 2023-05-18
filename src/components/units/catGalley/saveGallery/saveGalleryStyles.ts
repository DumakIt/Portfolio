import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  margin: 70px auto 0;

  & img:hover {
    outline: 5px solid #4096ff;
    transition: all 0.1s linear;
  }
`;

export const ImgTitle = styled.div`
  position: absolute;
  overflow: hidden;
  bottom: 0;
  height: 30px;
  width: 100%;
  padding: 8;
  font-size: 18px;
  text-align: center;
  line-height: 30px;
  background-color: rgba(255, 255, 255, 0.6);
`;
