"use client";

import { useEffect } from "react";

export default function Protection() {
  useEffect(() => {
    const prevent = (e: Event) => {
      e.preventDefault();
    };

    const preventKey = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      // Ctrl/Cmd + C
      if ((e.ctrlKey || e.metaKey) && key === "c") {
        e.preventDefault();
      }

      // Ctrl/Cmd + A
      if ((e.ctrlKey || e.metaKey) && key === "a") {
        e.preventDefault();
      }

      // Ctrl/Cmd + X
      if ((e.ctrlKey || e.metaKey) && key === "x") {
        e.preventDefault();
      }

      // Ctrl/Cmd + U
      if ((e.ctrlKey || e.metaKey) && key === "u") {
        e.preventDefault();
      }

      // Ctrl/Cmd + S
      if ((e.ctrlKey || e.metaKey) && key === "s") {
        e.preventDefault();
      }

      // Ctrl/Cmd + P
      if ((e.ctrlKey || e.metaKey) && key === "p") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", prevent);
    document.addEventListener("copy", prevent);
    document.addEventListener("cut", prevent);
    document.addEventListener("dragstart", prevent);
    document.addEventListener("selectstart", prevent);
    document.addEventListener("keydown", preventKey);

    return () => {
      document.removeEventListener("contextmenu", prevent);
      document.removeEventListener("copy", prevent);
      document.removeEventListener("cut", prevent);
      document.removeEventListener("dragstart", prevent);
      document.removeEventListener("selectstart", prevent);
      document.removeEventListener("keydown", preventKey);
    };
  }, []);

  return null;
}