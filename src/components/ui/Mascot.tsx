"use client";

import { motion } from "framer-motion";

interface MascotProps {
  pose: string;
  className?: string;
  isSmall?: boolean;
}

const poseMap: Record<string, string> = {
  overview: "/svg/profiles.svg",
  work: "/svg/desk.svg",
  skills: "/svg/thinking.svg",
  about: "/svg/welcome.svg",
  contact: "/svg/welcome.svg",
};

export default function Mascot({ pose, className = "", isSmall = false }: MascotProps) {
  const src = poseMap[pose] || "/svg/profiles.svg";

  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className={`relative flex items-center justify-center ${className}`}
    >
      <img
        src={src}
        alt={`Mascot pose: ${pose}`}
        style={{
          width: isSmall ? "40px" : "auto",
          height: isSmall ? "40px" : "160px",
          objectFit: "contain",
        }}
      />
    </motion.div>
  );
}
