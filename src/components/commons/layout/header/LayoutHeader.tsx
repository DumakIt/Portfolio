import { useRouter } from "next/router";
import { useEffectHandleScroll } from "../../hooks/custom/useEffectHandleScroll";
import { useRouterMovePage } from "../../hooks/custom/useRouterMovePage";
import { useSearch } from "../../hooks/custom/useSearch";
import { useSetIsToggle } from "../../hooks/custom/useSetIsToggle";
import { useMutationLogoutUser } from "../../hooks/mutation/useMutationLogoutUser";
import { useQueryFetchUserLoggedIn } from "../../hooks/query/useQueryFetchUserLoggedIn";
import PointChargeModal from "../../pointChargeModal/pointChargeModal";
import * as S from "./layoutHeaderStyles";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const isScroll = useEffectHandleScroll();
  const [isOpen, changeIsOpen] = useSetIsToggle();
  const [isToggle, changeIsToggle] = useSetIsToggle();
  const onChangeSearch = useSearch();
  const { data } = useQueryFetchUserLoggedIn();
  const { logoutUser } = useMutationLogoutUser();
  const { onClickMovePage } = useRouterMovePage();

  return (
    <>
      <S.HeaderWrapper>
        <S.LogoWrapper onClick={onClickMovePage("/usedMarket/")}>
          <img src="/images/usedMarket/logo.svg" />
        </S.LogoWrapper>
        {data?.fetchUserLoggedIn !== undefined ? (
          <S.UserWrapper>
            <S.UserName>
              {data.fetchUserLoggedIn.name}님 포인트{" "}
              <span>
                {data.fetchUserLoggedIn?.userPoint?.amount.toLocaleString()}
              </span>
              <span>P</span>
            </S.UserName>
            <S.Charge onClick={changeIsOpen}>충전</S.Charge>
            <S.LogOut
              onClick={() => {
                void logoutUser();
              }}
            >
              로그아웃
            </S.LogOut>
            <PointChargeModal
              isOpen={isOpen}
              data={data?.fetchUserLoggedIn}
              changeIsOpen={changeIsOpen}
            />
          </S.UserWrapper>
        ) : (
          <S.FuncWrapper>
            <S.StyledLink href="/usedMarket/login">LOGIN</S.StyledLink>
            <S.StyledLink href="/usedMarket/signUp">JOIN US</S.StyledLink>
          </S.FuncWrapper>
        )}
      </S.HeaderWrapper>
      {router.asPath === "/usedMarket" && (
        <S.SearchWrapper isScroll={isScroll}>
          <S.LogoWrapper>
            <img src="/images/usedMarket/logo.svg" />
          </S.LogoWrapper>
          <S.SearchBox istoggle={String(isToggle)} isScroll={isScroll}>
            <S.SearchBoxInput
              istoggle={String(isToggle)}
              type="text"
              onChange={onChangeSearch}
            />
            <S.CustomSearchOutlined
              istoggle={String(isToggle)}
              onClick={changeIsToggle}
            />
          </S.SearchBox>
        </S.SearchWrapper>
      )}
    </>
  );
}
