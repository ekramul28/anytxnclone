"use client";
import { useEffect } from "react";

const CursorMovement = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursorX = e.clientX + "px";
      const cursorY = e.clientY + "px";

      // Set the CSS variables for cursor position
      document.documentElement.style.setProperty("--cursor-x", cursorX);
      document.documentElement.style.setProperty("--cursor-y", cursorY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    console.log(handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return null; // No need to render anything
};

export default CursorMovement;
