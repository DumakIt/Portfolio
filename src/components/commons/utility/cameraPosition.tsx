import { Size } from "@react-three/fiber";

export const responsiveCamera = (size: Size): number[] => {
  if (size.width < 481) return [-26, 20, 38];
  if (size.width < 821) return [-19.5, 15, 28.5];
  if (size.width < 1201) return [-14.6, 11, 21.8];
  return [-13, 10, 19];
};
