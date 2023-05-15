import { useEffect } from "react";

export const useEffectSetImage = (args) => {
  useEffect(() => {
    if (args.data?.fetchUseditem?.images === undefined) return;
    args.setImages({ ...args.data?.fetchUseditem?.images });
  }, [args.data?.fetchUseditem?.images]);
};
