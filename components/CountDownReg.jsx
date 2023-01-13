import { useCallback, useEffect, useRef, useState } from "react";
import { useFormatTime } from "../hooks/useFormatTime";
import { useTimer } from "../hooks/useTimer";

export default function CountDownReg({ seconds }) {
  const { countdown, timerId, handleClickStert } = useTimer(seconds);
  const { formatTime } = useFormatTime();
  return (
    <>
      <div>{countdown}</div>
    </>
  );
}
