import axios from "axios";
import { useState } from "react";

interface IUseGetCatImg {
  catImgs: any[];
  axiosCatImg: () => Promise<void>;
}

export const useGetCatImg = (): IUseGetCatImg => {
  const [catImgs, setCatImgs] = useState<any[]>([]);
  const [pageNum, setPageNum] = useState(0);

  const axiosCatImg = async (): Promise<void> => {
    const result = await axios.get(
      `https://api.thecatapi.com/v1/images/search?limit=12&order=ASC&mime_types=jpg&page=${pageNum}&api_key=live_SEnutBQpOTB4uNB0KSkKHTOLfDKQYfR3NJS6UgWzLNVMUqwzo0sBryYa4CkvC5qB`
    );

    const newResult = result.data.map((el: any) => ({
      src: el.url,
      width: el.width,
      height: el.height,
    }));

    setCatImgs((prev) => [...prev, ...newResult]);
    setPageNum((prev) => prev + 1);
  };

  return { catImgs, axiosCatImg };
};
