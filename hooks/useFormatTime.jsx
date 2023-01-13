import { useCallback, useEffect, useRef, useState } from "react";

//秒を分に変換
export const useFormatTime = (countdown) => {
  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);

    if (minutes <= 9) minutes = "0" + minutes;
    if (seconds <= 9) seconds = "0" + seconds;
    return minutes + ":" + seconds;
  };
  return { formatTime };
};
