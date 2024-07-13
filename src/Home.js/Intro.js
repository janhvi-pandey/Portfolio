import React, { useState, useEffect } from "react";
import LargeScreenIntro from "./LargeScreenIntro";
import SmallScreenIntro from "./SmallScreenIntro";

export default function Intro() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    // Set the initial state
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmallScreen ? <SmallScreenIntro /> : <LargeScreenIntro />;
}
