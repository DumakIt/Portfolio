import { useRouter } from "next/router";
import CatGalleyLayout from "./catGalley/catGalleyLayout";
import UsedMarketLayout from "./usedMarket/usedMarketLayout";

interface ILayoutPros {
  children: JSX.Element;
}

export default function Layout(props: ILayoutPros): JSX.Element {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <>
      {router.asPath.split("/")[1] === "usedMarket" && (
        <>
          <UsedMarketLayout />
          {props.children}
        </>
      )}
      {router.asPath.split("/")[1] === "catGallery" && (
        <>
          <CatGalleyLayout />
          {props.children}
        </>
      )}
    </>
  );
}
