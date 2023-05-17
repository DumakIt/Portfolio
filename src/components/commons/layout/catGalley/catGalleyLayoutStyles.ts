import styled from "@emotion/styled";

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 30px 0 80px;
  background-color: #4096ff;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  cursor: pointer;
  & > img {
    height: 40%;
  }
`;
