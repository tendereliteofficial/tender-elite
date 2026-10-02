"use client";

import { useEffect, useState } from "react";

type Spark = {
  id: number;
  x: number;
  y: number;
  angle: number;
  distance: number;
  size: number;
};

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      setVisible(true);
    };

    const mouseLeave = () => {
      setVisible(false);
    };

    const mouseEnter = () => {
      setVisible(true);
    };

    const updateHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const isInteractive =
        target.closest(
          "a, button, input, textarea, select, summary, [role='button']"
        ) !== null;

      setHovering(isInteractive);
    };

    const handleClick = (e: MouseEvent) => {
      const newSparks: Spark[] = [];

      // Golden dust particles
      for (let i = 0; i < 24; i++) {
        newSparks.push({
          id: Date.now() + i + Math.random(),
          x: e.clientX,
          y: e.clientY,
          angle: Math.random() * Math.PI * 2,
          distance: 18 + Math.random() * 58,
          size: 2 + Math.random() * 4,
        });
      }

      setSparks((prev) => [...prev, ...newSparks]);

      setTimeout(() => {
        setSparks((prev) =>
          prev.filter(
            (spark) =>
              !newSparks.some((item) => item.id === spark.id)
          )
        );
      }, 800);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", mouseLeave);
    window.addEventListener("mouseenter", mouseEnter);
    window.addEventListener("mouseover", updateHover);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", mouseLeave);
      window.removeEventListener("mouseenter", mouseEnter);
      window.removeEventListener("mouseover", updateHover);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      {/* Cursor Dot */}
      <div
        className={`custom-cursor-dot ${
          visible ? "custom-cursor-visible" : ""
        } ${hovering ? "custom-cursor-hover" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Cursor Ring */}
      <div
        className={`custom-cursor-ring ${
          visible ? "custom-cursor-visible" : ""
        } ${hovering ? "custom-cursor-hover" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Golden Dust */}
      {sparks.map((spark) => {
        const endX =
          Math.cos(spark.angle) * spark.distance;

        const endY =
          Math.sin(spark.angle) * spark.distance;

        return (
          <span
            key={spark.id}
            className="cursor-spark"
            style={
              {
                left: `${spark.x}px`,
                top: `${spark.y}px`,
                width: `${spark.size}px`,
                height: `${spark.size}px`,
                "--spark-x": `${endX}px`,
                "--spark-y": `${endY}px`,
              } as React.CSSProperties
            }
          />
        );
      })}
    </>
  );
}