import { useEffect } from "react";

export const useEffectSetFormImg = (args) => {
  useEffect(() => {
    args.setValue("images", Object.values(args.images));
  }, [args.images]);
};
