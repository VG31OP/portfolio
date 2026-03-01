"use client";

import { useEffect, useRef } from "react";

const EasterEggs = () => {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    console.clear();

    console.log(
      "%c⚡ ACCESS GRANTED ⚡",
      "color:#00ff88; font-size:18px; font-weight:bold;"
    );

    console.log(
      "%cVG | Vraj Shiroya",
      "color:#ffffff; font-size:24px; font-weight:bold;"
    );

    console.log(
      "%cVibe Coder • Cybersecurity Student",
      "color:#00bfff; font-size:14px;"
    );

    console.log(
      "%cSystem Status: Operational",
      "color:#888; font-size:12px;"
    );

    console.log(
      "%cIf you're reading this, you're probably technical. Let's build.",
      "color:#666; font-size:12px;"
    );
  }, []);

  return null;
};

export default EasterEggs;