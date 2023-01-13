import { useCallback, useEffect, useRef, useState } from "react";
import { useShow } from "../hooks/Show";

export default function RegBtn({}) {
  const {
    isShowUp,
    setIsShowUp,
    isShowTimer,
    setIsShowTimer,
    isShowStopBtn,
    setIsShowStopBtn,
    isShowRegBtn,
    setIsShowRegBtn,
    isShowFutuuBtn,
    setIsShowFutuuBtn,
    isShowKatameBtn,
    setIsShowKatameBtn,
    isShowBariBtn,
    setIsShowBariBtn,
    isShowYawaBtn,
    setIsShowYawaBtn,
  } = useShow();
  const Reg = useCallback(() => {
    setIsShowUp((isUp) => false);
    setIsShowTimer((isShowTimer) => true);
    setIsShowStopBtn((isShowStopBtn) => true);
    setIsShowFutuuBtn((isShowFutuuBtn) => true);
    setIsShowKatameBtn((isShowKatameBtn) => true);
    setIsShowBariBtn((isShowBariBtn) => true);
    setIsShowYawaBtn((isShowYawaBtn) => true);
  }, []);
  return <>{isShowRegBtn ? <button onClick={Reg}>REG</button> : null}</>;
}
