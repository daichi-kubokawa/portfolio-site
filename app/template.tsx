"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.main
      key={pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </motion.main>
  );
}
