import { useMotionTemplate, useMotionValue } from "motion/react";
import { MouseEvent, useState } from "react";

export function useControlSpotlight() {
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const background = useMotionTemplate`
    radial-gradient(
      ${visible ? "var(--input-glow-radius)" : "0px"} circle at ${mouseX}px ${mouseY}px,
      var(--input-glow),
      transparent 90%
    )
  `;

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return {
    background,
    handleMouseEnter: () => setVisible(true),
    handleMouseLeave: () => setVisible(false),
    handleMouseMove,
  };
}
