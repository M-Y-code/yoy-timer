import React, { createContext, useState } from "react";

export const isShowBtnContext = createContext();

const [isShowReg, setIsShowReg] = useState(true);
const [isShowPre, setIsShowPre] = useState(true);
const pushStart = () => {
  setIsShowReg((isShowReg) => false);
  setIsShowPre((isShowPre) => false);
};

const pushStop = () => {
  setIsShowReg((isShowReg) => true);
  setIsShowPre((isShowPre) => true);
};

<isShowBtnContext.Provider
  value={{
    isShowReg,
    setIsShowReg,
    isShowPre,
    setIsShowPre,
    pushStart,
    pushStop,
  }}
>
  <CountDownReg />
  <CountDownPre />
</isShowBtnContext.Provider>;
