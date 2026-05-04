"use client";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  variant?: "navy" | "light" | "image";
}

export default function PageHero({
  title,
  subtitle,
  variant = "light",
}: PageHeroProps) {
  const isLight = variant === "light";
  const textColor = isLight ? "#006580" : "#fff";
  const subtitleColor = isLight ? "#5a5a5a" : "rgba(255,255,255,0.88)";

  return (
    <section
      style={{
        background: isLight ? "#fff" : "#006580",
        padding: "32px 24px 22px",
        marginBottom: 18,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid #efece8",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            color: textColor,
            fontFamily: "var(--font-oswald), Impact, sans-serif",
            fontSize: "clamp(32px, 4vw, 54px)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: 0,
            margin: 0,
            padding: 0,
            textTransform: "uppercase",
          }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{
              color: subtitleColor,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(16px, 1.8vw, 19px)",
              fontWeight: 700,
              marginTop: 10,
              maxWidth: 720,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.45,
            }}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 76 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: 4, background: "#ffc400", margin: "18px auto 0" }}
        />
      </div>
    </section>
  );
}
