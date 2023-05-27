import { Size } from "@react-three/fiber";
import { Camera } from "@react-three/fiber/dist/declarations/src/core/utils";
import GSAP from "gsap";

import { RefObject } from "react";
import type { OrbitControls as OrbitControlsType } from "three-stdlib";
import { responsiveCamera } from "../../utility/cameraPosition";

interface IUseClickThreeModelProps {
  size: Size;
  controlRef: RefObject<OrbitControlsType> | any;
  camera: Camera & {
    manual?: boolean | undefined;
  };
  changeIsTvModal?: () => void;
  changeIsCanvasModal?: () => void;
}

interface IUseClickThreeModel {
  onClickTV: () => void;
  onClickCanvas: () => void;
  onClickCancel: () => void;
}

export const useClickThreeModel = (
  args: IUseClickThreeModelProps
): IUseClickThreeModel => {
  const onClickTV = (): void => {
    // tv 클릭시 카메라 이동 애니메이션 및 Modal창 열기
    const timeLine = GSAP.timeline();

    timeLine.to(args.camera.position, {
      x: 1.8335,
      y: 7.7621,
      z: 0.574779,
      duration: 1,
    });
    timeLine.to(
      args.controlRef.current?.target,
      {
        x: 11.7576,
        y: 8.76926,
        z: 0.574778,
        duration: 1,
        onComplete: args.changeIsTvModal,
      },
      "<"
    );
  };

  const onClickCanvas = (): void => {
    // canvas 클릭시 카메라 이동 애니메이션 및 Modal창 열기
    const timeLine = GSAP.timeline();
    timeLine.to(args.camera.position, {
      x: -10.6035,
      y: 6.207432,
      z: 2.31214,
      duration: 1,
    });
    timeLine.to(
      args.controlRef.current?.target,
      {
        x: -10.6035,
        y: 4.72083,
        z: -6.64039,
        duration: 1,
        onComplete: args.changeIsCanvasModal,
      },
      "<"
    );
  };

  const onClickCancel = (): void => {
    // Modal의 취소 버튼 클릭시 Modal창 닫기 및 카메라 이동 애니메이션
    const [x, y, z] = responsiveCamera(args.size);
    if (args.changeIsTvModal !== undefined) args.changeIsTvModal();
    if (args.changeIsCanvasModal !== undefined) args.changeIsCanvasModal();

    const timeLine = GSAP.timeline();
    timeLine.to(args.camera.position, {
      x,
      y,
      z,
      duration: 1,
    });
    timeLine.to(
      args.controlRef.current?.target,
      {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
      },
      "<"
    );
  };

  return { onClickTV, onClickCanvas, onClickCancel };
};
