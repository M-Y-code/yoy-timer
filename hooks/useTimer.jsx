import { useCallback, useEffect, useRef, useState } from "react";

export const useTimer = () => {
  const [countdown, setCountdown] = useState(360);
  console.log(countdown);
  const timerId = useRef();
  const handleClickStert = useCallback(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);
  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
      setCountdown((prev) => seconds);
    }
  }, [countdown]);

  return { countdown, timerId, handleClickStert };
};
