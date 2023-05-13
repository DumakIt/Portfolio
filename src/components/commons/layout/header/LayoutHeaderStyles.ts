import styled from "@emotion/styled";
import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";

interface IProps {
  isScroll?: boolean;
  isToggle?: boolean;
}

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 30px 0 80px;
  background-color: black;
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

export const FuncWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 130px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const SearchWrapper = styled.div`
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top: 0;
  height: 70px;
  margin-top: 20px;
  padding: 0 30px 0 80px;
  background-color: ${(props: IProps) =>
    props.isScroll === true ? "black" : "white"};

  & > div:first-of-type {
    visibility: ${(props: IProps) =>
      props.isScroll === true ? "visible" : "hidden"};
  }
`;

export const SearchBox = styled.div<IProps>`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  width: ${(props) => (props.isToggle === true ? "300px" : "60px")};
  height: 60px;
  padding: 0 15px;
  border: 2px solid black;
  border-radius: 60px;
  background-color: ${(props) => (props.isToggle === true ? "white" : "black")};

  transition: ${(props) =>
    props.isScroll === true ? "width 0.7s ease 0.7s ease" : "width 0.7s ease"};
`;

export const SearchBoxInput = styled.input<IProps>`
  display: ${(props) => (props.isToggle === true ? "block" : "none")};
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: none;
  font-size: 18px;

  &:focus {
    outline: none;
  }
`;

export const CustomSearchOutlined = styled(SearchOutlined)<IProps>`
  margin-left: 10px;
  color: ${(props) => (props.isToggle === true ? "black" : "white")};
  font-size: 30px;
`;
