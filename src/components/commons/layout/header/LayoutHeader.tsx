import { useEffectHandleScroll } from "../../hooks/custom/useEffectHandleScroll";
import { useRouterMovePage } from "../../hooks/custom/useRouterMovePage";
import { useSearch } from "../../hooks/custom/useSearch";
import { useSetIsToggle } from "../../hooks/custom/useSetIsToggle";
import * as S from "./LayoutHeaderStyles";

export default function LayoutHeader(): JSX.Element {
  const isScroll = useEffectHandleScroll();
  const onChangeSearch = useSearch();
  const { onClickMovePage } = useRouterMovePage();
  const [isToggle, changeIsToggle] = useSetIsToggle();

  return (
    <>
      <S.HeaderWrapper>
        <S.LogoWrapper onClick={onClickMovePage("/")}>
          <img src="/images/layout/logo.svg" />
        </S.LogoWrapper>
        <S.FuncWrapper>
          <S.StyledLink href="/">LOGIN</S.StyledLink>
          <S.StyledLink href="/">JOIN US</S.StyledLink>
        </S.FuncWrapper>
      </S.HeaderWrapper>
      <S.SearchWrapper isScroll={isScroll}>
        <S.LogoWrapper>
          <img src="/images/layout/logo.svg" />
        </S.LogoWrapper>
        <S.SearchBox isToggle={isToggle} isScroll={isScroll}>
          <S.SearchBoxInput
            isToggle={isToggle}
            type="text"
            onChange={onChangeSearch}
          />
          <S.CustomSearchOutlined
            isToggle={isToggle}
            onClick={changeIsToggle}
          />
        </S.SearchBox>
      </S.SearchWrapper>
    </>
  );
}
