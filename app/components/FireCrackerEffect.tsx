import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FireCrackerEffect() {
  const [bursts, setBursts] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  useEffect(() => {
    let id = 0;
    const listener = (e: MouseEvent) => {
      const newBurst = { id: id++, x: e.clientX, y: e.clientY };
      setBursts((b) => [...b, newBurst]);
      // Remove after animation (e.g. 500ms)
      setTimeout(
        () => setBursts((b) => b.filter((burst) => burst.id !== newBurst.id)),
        1000
      );
    };
    window.addEventListener("mousemove", listener);
    return () => window.removeEventListener("mousemove", listener);
  }, []);

  return (
    <>
      {bursts.map(({ id, x, y }) => (
        <motion.div
          key={id}
          initial={{ opacity: 1, scale: 0 }}
          animate={{ opacity: 0, scale: 2.5 }}
          transition={{ duration: 0.8 }}
          className="z-[9999]"
          style={{
            position: "fixed",
            left: x,
            top: y,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "purple",
            pointerEvents: "none",
          }}
        />
      ))}
    </>
  );
}
