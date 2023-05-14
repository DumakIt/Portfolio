import { useRouter } from "next/router";
import LayoutHeader from "./header/layoutHeader";

interface ILayoutPros {
  children: JSX.Element;
}

export default function Layout(props: ILayoutPros): JSX.Element {
  const router = useRouter();
  return (
    <>
      {router.asPath !== "/" ? (
        <>
          <LayoutHeader />
          {props.children}
        </>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
}
