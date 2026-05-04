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
  backgroundImage,
  variant = "light",
}: PageHeroProps) {
  const hasImage = !!backgroundImage;
  const isNavy = variant === "navy";

  const textColor = hasImage || isNavy ? "#fff" : "#006580";
  const subtitleColor = hasImage || isNavy ? "rgba(255,255,255,0.92)" : "#5a5a5a";

  let bg = "#fff";
  if (isNavy) bg = "#006580";
  if (hasImage) bg = "#003f55";

  return (
    <section
      style={{
        position: "relative",
        background: bg,
        padding: hasImage ? "clamp(52px, 9vw, 96px) 24px" : "32px 24px 24px",
        marginBottom: 0,
        textAlign: "center",
        overflow: "hidden",
        borderTop: hasImage ? "none" : "1px solid #efece8",
        display: "flex",
        alignItems: "center",
        minHeight: hasImage ? "clamp(220px, 22vw, 340px)" : "auto",
      }}
    >
      {/* Ken Burns background image */}
      {hasImage && (
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "-8%",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "contain",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
          }}
        />
      )}

      {/* Gradient overlay when image present */}
      {hasImage && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(105deg, rgba(0,50,80,0.93) 0%, rgba(0,101,128,0.84) 55%, rgba(0,50,80,0.65) 100%)",
            zIndex: 1,
          }}
        />
      )}

      {/* Content */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{
            color: textColor,
            fontFamily: "var(--font-oswald), Impact, sans-serif",
            fontSize: "clamp(30px, 4vw, 60px)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: 0,
            margin: 0,
            padding: 0,
            textTransform: "uppercase",
            textShadow: hasImage ? "0 2px 18px rgba(0,0,0,0.35)" : "none",
          }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            style={{
              color: subtitleColor,
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(15px, 1.7vw, 19px)",
              fontWeight: 700,
              marginTop: 10,
              maxWidth: 680,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.48,
              textShadow: hasImage ? "0 1px 8px rgba(0,0,0,0.3)" : "none",
              paddingBottom: 0,
            }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Gold accent underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 72 }}
          transition={{ duration: 0.75, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
          style={{ height: 4, background: "#ffc400", margin: "16px auto 0", borderRadius: 2 }}
        />
      </div>
    </section>
  );
}
