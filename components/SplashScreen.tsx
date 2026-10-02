"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    const hideTimer = setTimeout(() => {
      setShowSplash(false);
    }, 2800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!showSplash) return null;

  return (
    <div
      className={`splash-screen ${fadeOut ? "splash-fade-out" : ""}`}
      aria-label="Loading Tender Elite"
    >
      <picture className="splash-image-wrapper">
        <source
          media="(max-width: 767px)"
          srcSet="/images/SplashScreenMobile.png"
        />

        <source
          media="(max-width: 1199px)"
          srcSet="/images/SplashScreenTab.png"
        />

        <img
          src="/images/SplashScreenLaptop.png"
          alt="Tender Elite Welcome"
          className="splash-image"
        />
      </picture>
    </div>
  );
}