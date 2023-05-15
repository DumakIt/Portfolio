import { Dispatch, MouseEvent, SetStateAction, useState } from "react";

export const useSetIsActive = (): [
  (event: MouseEvent) => void,
  string,
  Dispatch<SetStateAction<string>>
] => {
  const [isActive, setIsActive] = useState("");

  const onClickIsActive = (event: MouseEvent): void => {
    console.log(event.currentTarget.id);
    setIsActive(event.currentTarget.id);
  };
  return [onClickIsActive, isActive, setIsActive];
};
