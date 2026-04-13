"use client";
import { useEffect, useRef } from "react";

export default function GlobalMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const startMusic = () => {
      audioRef.current?.play();
      document.removeEventListener("click", startMusic);
    };

    document.addEventListener("click", startMusic);
  }, []);

  return <audio ref={audioRef} src="/images/mybirthday.mpeg" loop />;
}