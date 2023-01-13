import { useCallback, useEffect, useRef, useState } from "react";

export default function StopBtn({}) {
  const handleClickStop = useCallback(() => {
    setIsShowReg((isShowReg) => true);
    setIsShowTimer((isShowTimer) => false);
    setIsShowStopBtn((isShowStopBtn) => false);
    setIsUp((isUp) => false);
    setIsShowFutuuBtn((isShowFutuuBtn) => false);
    setIsShowKatameBtn((isShowKatameBtn) => false);
    setIsShowBariBtn((isShowBariBtn) => false);
    setIsShowYawaBtn((isShowYawaBtn) => false);
    clearInterval(timerId.current);
    setCountdown((prev) => seconds);

    return (
      <>{isShowStopBtn ? <button onClick={handleClickStop}>×</button> : null}</>
    );
  });
}
