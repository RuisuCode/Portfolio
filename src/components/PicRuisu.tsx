import { motion } from "motion/react";

export default function PicRuisu({ children }: { children: JSX.Element }) {
  return (
    <motion.div
      initial={{
        transform: "translateX(0px) translateY(0px)",
        boxShadow: "rgba(240, 234, 243, 0.24) 0px 6px 15px",
      }}
      whileHover={{
        scale: 1.1,
        transform: "translateX(-8px) translateY(-8px)",
        boxShadow: "rgba(240, 234, 243, 1) 0px 6px 15px",
        filter: "invert(18%) ",
      }}
      whileTap={{ scale: 0.8 }}
      transition={{ duration: 0.2, ease: "linear" }}
      style={{
        width: "auto",
        height: "auto",
        borderRadius: "0.75em",
        cursor: "pointer",
      }}
    >
      <a
        href="https://www.linkedin.com/in/luis-campos-13034b200"
        target="_blank"
      >
        {children}
      </a>
    </motion.div>
  );
}
