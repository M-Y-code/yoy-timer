import { useCallback, useEffect, useRef, useState } from "react";

export const useKatasa = () => {
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

  return {
    handleClickBari,
    handleClickKatame,
    handleClickFutuu,
    handleClickYawa,
  };
};
