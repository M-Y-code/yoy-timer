import { useCallback, useEffect, useRef, useState } from "react";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes <= 9) minutes = "0" + minutes;
  if (seconds <= 9) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};

export default function CountDown({ seconds }) {
  const [countdown, setCountdown] = useState(seconds);
  const timerId = useRef();
  const [isUp, setIsUp] = useState(false);
  const [isShowTimer, setIsShowTimer] = useState(false);
  const [isShowBtn, setIsShowBtn] = useState(true);
  const [isShowStopBtn, setIsShowStopBtn] = useState(false);
  const [isShowKatameBtn, setIsShowKatameBtn] = useState(false);
  const [isShowBariBtn, setIsShowBariBtn] = useState(false);
  const [isShowYawaBtn, setIsShowYawaBtn] = useState(false);

  const handleClickStert = useCallback(() => {
    setIsUp((isUp) => false);
    setIsShowBtn((isShowBtn) => false);
    setIsShowTimer((isShowTimer) => true);
    setIsShowStopBtn((isShowStopBtn) => true);
    setIsShowKatameBtn((isShowKatameBtn) => true);
    setIsShowBariBtn((isShowBariBtn) => true);
    setIsShowYawaBtn((isShowYawaBtn) => true);
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  const handleClickStop = useCallback(() => {
    setIsShowBtn((isShowBtn) => true);
    setIsShowTimer((isShowTimer) => false);
    setIsShowStopBtn((isShowStopBtn) => false);
    setIsUp((isUp) => false);
    setIsShowKatameBtn((isShowKatameBtn) => false);
    setIsShowBariBtn((isShowBariBtn) => false);
    setIsShowYawaBtn((isShowYawaBtn) => false);
    clearInterval(timerId.current);
    setCountdown((prev) => seconds);
  });

  const handleClickKatame = useCallback(() => {
    setCountdown((prev) => prev - 60);
  });
  const handleClickBari = useCallback(() => {
    setCountdown((prev) => prev - 180);
  });
  const handleClickYawa = useCallback(() => {
    setCountdown((prev) => prev + 120);
  });

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
      setCountdown((prev) => seconds);
      setIsUp((isUp) => true);
      setIsShowTimer((isShowTimer) => false);
      setIsShowStopBtn((isShowStopBtn) => true);
    }
  }, [countdown]);

  return (
    <>
      {isShowTimer ? <div>{formatTime(countdown)}</div> : null}
      {isUp ? <div>up</div> : null}
      {isShowBtn ? <button onClick={handleClickStert}>プレ</button> : null}
      {isShowStopBtn ? <button onClick={handleClickStop}>×</button> : null}
      {isShowBariBtn ? <button onClick={handleClickBari}>バリ</button> : null}
      {isShowKatameBtn ? (
        <button onClick={handleClickKatame}>かた</button>
      ) : null}

      {isShowYawaBtn ? <button onClick={handleClickYawa}>やわ</button> : null}
    </>
  );
}
