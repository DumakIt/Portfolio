import { useRouter } from "next/router";
import CatGalleryLayout from "./catGallery/catGalleryLayout";
import UsedMarketLayout from "./usedMarket/usedMarketLayout";

interface ILayoutPros {
  children: JSX.Element;
}

export default function Layout(props: ILayoutPros): JSX.Element {
  const router = useRouter();
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
          <CatGalleryLayout />
          {props.children}
        </>
      )}

      {router.asPath === "/" && <>{props.children}</>}
    </>
  );
}
