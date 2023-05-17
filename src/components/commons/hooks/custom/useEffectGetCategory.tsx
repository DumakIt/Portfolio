import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
import { Dispatch, SetStateAction, useEffect } from "react";
import { firebaseApp } from "../../../../commons/libraries/firebase";

interface ICategoryList {
  label: string;
  value: string;
  timestamp: string;
}

interface IUseEffectGetCategoryArgs {
  catGalleryUserId: string;
  setCategoryList: Dispatch<SetStateAction<ICategoryList[]>>;
}

export const useEffectGetCategory = (args: IUseEffectGetCategoryArgs): void => {
  useEffect(() => {
    const getCategory = async (): Promise<void> => {
      const accessDB = collection(
        getFirestore(firebaseApp),
        args.catGalleryUserId
      );
      const result = await getDocs(accessDB);
      const datas: any[] = result.docs.map((el) => el.data());

      if (datas.length !== 0) {
        args.setCategoryList(datas);
      }
    };
    void getCategory();
  }, []);
};
