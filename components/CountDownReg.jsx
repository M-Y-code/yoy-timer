import { useCallback, useContext, useEffect, useRef, useState } from "react";

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
  const [isShowFutuuBtn, setIsShowFutuuBtn] = useState(false);
  const [futuuAct, setFutuuAct] = useState(false);
  const [isShowKatameBtn, setIsShowKatameBtn] = useState(false);
  const [katameAct, setKatameAct] = useState(false);
  const [isShowBariBtn, setIsShowBariBtn] = useState(false);
  const [bariAct, setBariAct] = useState(false);
  const [isShowYawaBtn, setIsShowYawaBtn] = useState(false);
  const [yawaAct, setYawaAct] = useState(false);

  const {
    isShowReg,
    setIsShowReg,
    isShowPre,
    setIsShowPre,
    pushStart,
    pushStop,
  } = useContext(isShowBtnContext);

  const handleClickStert = useCallback(() => {
    setIsUp((isUp) => false);
    setIsShowReg((isShowReg) => false);
    setIsShowPre((isShowPre) => false);
    setIsShowTimer((isShowTimer) => true);
    setIsShowStopBtn((isShowStopBtn) => true);
    setIsShowFutuuBtn((isShowFutuuBtn) => true);
    setIsShowKatameBtn((isShowKatameBtn) => true);
    setIsShowBariBtn((isShowBariBtn) => true);
    setIsShowYawaBtn((isShowYawaBtn) => true);
    setFutuuAct((futuuAct) => true);
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  const handleClickStop = useCallback(() => {
    setIsShowReg((isShowReg) => true);
    setIsShowPre((isShowPre) => true);
    setIsShowTimer((isShowTimer) => false);
    setIsShowStopBtn((isShowStopBtn) => false);
    setIsUp((isUp) => false);
    setIsShowFutuuBtn((isShowFutuuBtn) => false);
    setIsShowKatameBtn((isShowKatameBtn) => false);
    setIsShowBariBtn((isShowBariBtn) => false);
    setIsShowYawaBtn((isShowYawaBtn) => false);
    clearInterval(timerId.current);
    setCountdown((prev) => seconds);
  });
  const handleClickBari = useCallback(() => {
    setBariAct((bariAct) => true);
    if (futuuAct === true) {
      setCountdown((prev) => prev - 240);
      setFutuuAct((futuuAct) => false);
    } else {
      if (katameAct === true) {
        setCountdown((prev) => prev - 150);
        setKatameAct((katameAct) => false);
      } else {
        if (yawaAct === true) {
          setCountdown((prev) => prev - 330);
          setYawaAct((yawaAct) => false);
        }
      }
    }
  });
  const handleClickKatame = useCallback(() => {
    setKatameAct((katameAct) => true);
    if (futuuAct === true) {
      setCountdown((prev) => prev - 90);
      setFutuuAct((futuuAct) => false);
    } else {
      if (bariAct === true) {
        setCountdown((prev) => prev + 150);
        setBariAct((bariAct) => false);
      } else {
        if (yawaAct === true) {
          setCountdown((prev) => prev - 180);
          setYawaAct((yawaAct) => false);
        }
      }
    }
  });
  const handleClickFutuu = useCallback(() => {
    setFutuuAct((futuuAct) => true);
    if (katameAct === true) {
      setCountdown((prev) => prev + 90);
      setKatameAct((katameAct) => false);
    } else {
      if (bariAct === true) {
        setCountdown((prev) => prev + 240);
        setBariAct((bariAct) => false);
      } else {
        if (yawaAct === true) {
          setCountdown((prev) => prev - 90);
          setYawaAct((yawaAct) => false);
        }
      }
    }
  });

  const handleClickYawa = useCallback(() => {
    setYawaAct((yawaAct) => true);
    if (katameAct === true) {
      setCountdown((prev) => prev + 180);
      setKatameAct((katameAct) => false);
    } else {
      if (bariAct === true) {
        setCountdown((prev) => prev + 330);
        setBariAct((bariAct) => false);
      } else {
        if (futuuAct === true) {
          setCountdown((prev) => prev + 90);
          setFutuuAct((futuuAct) => false);
        }
      }
    }
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
      {isShowReg ? <button onClick={handleClickStert}>REG</button> : null}
      {isShowStopBtn ? <button onClick={handleClickStop}>×</button> : null}
      {isShowBariBtn ? <button onClick={handleClickBari}>バリ</button> : null}
      {isShowKatameBtn ? (
        <button onClick={handleClickKatame}>かた</button>
      ) : null}
      {isShowFutuuBtn ? (
        <button onClick={handleClickFutuu}>ふつう</button>
      ) : null}
      {isShowYawaBtn ? <button onClick={handleClickYawa}>やわ</button> : null}
    </>
  );
}
