import React from "react";
import "./HeroLogo.css";
import logo2 from "../../../assets/logo2.png";
import logo1 from "../../../assets/logo1.png";
import logo3 from "../../../assets/logo3.png";
import logo4 from "../../../assets/logo4.png";
import { useState, useEffect } from "react";
import { useConfig } from "../../../hooks/useConifg";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { DEFAULT_CONFIG } from "../../../utils/defaultConfig";


function HeroMotionImg(props) {
  return (
    <motion.img initial={{ opacity: 0 }} animate={{ opacity: 0.9 }} exit={{ opacity: 0 }} {...props} />
  )
}

export default function HeroLogo() {
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const { getConfig } = useConfig(false);

  useEffect(() => {
    const fetchConfig = () => {
      const storageConfig = getConfig();
      if (storageConfig) setConfig(storageConfig);
    };

    fetchConfig();
    const configFetchInterval = setInterval(() => fetchConfig(), 100);

    console.warn("STRONA POBIERA DANE CO 100MS CO MOŻE(ALE NIE MUSI) POWODOWAĆ SPADEK WYDAJNOŚCI. POZDRAWIAM.")

    return () => clearInterval(configFetchInterval);
  }, []);

  return (
    <motion.div
      className="hero-logo"
      animate={{
        scaleX: config.scaleX * 0.02,
        height: `${config.size * 4}px`,
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
    >
      <AnimatePresence mode="wait">
        {config.selected === "logo1" && (
          <HeroMotionImg key={1} src={logo1} alt="" className="hero-logo-img" />
        )}
        {config.selected === "logo2" && (
          <HeroMotionImg key={2} src={logo2} alt="" className="hero-logo-img logo-shadow" />
        )}
        {config.selected === "logo3" && (
          <HeroMotionImg key={3} src={logo3} alt="" className="hero-logo-img" />
        )}
        {config.selected === "logo4" && (
          <HeroMotionImg key={4} src={logo4} alt="" className="hero-logo-img" />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {config.text && (
          <motion.span
            animate={{ fontSize: `${config?.size * 0.07}rem`, opacity: 0.8 }}
            initial={{ fontSize: "3.5rem", opacity: 0 }}
            className="hero-logo-text"
            exit={{ opacity: 0 }}
          >
            11 listopada
            <br />
            Święto Niepodległości
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
