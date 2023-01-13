import { useState } from "react";

export const useShow = () => {
  const [isShowUp, setIsShowUp] = useState(false);
  const [isShowTimer, setIsShowTimer] = useState(true);
  const [isShowStopBtn, setIsShowStopBtn] = useState(false);
  const [isShowRegBtn, setIsShowRegBtn] = useState(true);
  const [isShowFutuuBtn, setIsShowFutuuBtn] = useState(false);
  const [isShowKatameBtn, setIsShowKatameBtn] = useState(false);
  const [isShowBariBtn, setIsShowBariBtn] = useState(false);
  const [isShowYawaBtn, setIsShowYawaBtn] = useState(false);
  return {
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
  };
};
