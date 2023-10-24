import React from "react";
import "./HeroLogo.css";
import logo2 from "../../../assets/logo2.png";
import logo1 from "../../../assets/logo1.png";
import logo3 from "../../../assets/logo3.png";
import { useState, useEffect } from "react";
import { useConfig } from "../../../hooks/useConifg";
import { motion } from "framer-motion";

export default function HeroLogo() {
  const [config, setConfig] = useState({
    selected: "logo2",
    scaleX: 50,
    size: 50,
  });
  const { getConfig } = useConfig(false);

  useEffect(() => {
    setInterval(() => {
      setConfig(getConfig());
    }, 100);
  }, []);

  return (
    <motion.div
      className="hero-logo"
      animate={{
        scaleX: config.scaleX * 0.02,
        height: `${config.size * 4}px`,
        opacity: 1
      }}
      initial={{
        opacity: 0,
      }}
    >
      {config.selected === "logo1" && (
        <>
          <img src={logo1} alt="" className="hero-logo-img logo-1" />
        </>
      )}
      {config.selected === "logo2" && (
        <>
          <img src={logo2} alt="" className="hero-logo-img" />
          <motion.span
            animate={{ fontSize: `${config?.size * 0.07}rem` }}
            initial={{ fontSize: '3.5rem' }}
            className="hero-logo-text"
            >
            11 listopada
            <br />
            Święto Niepodległości
          </motion.span>
        </>
      )}
      {config.selected === "logo3" && (
        <>
          <img src={logo3} alt="" className="hero-logo-img logo-3" />
          <motion.span
            animate={{ fontSize: `${config?.size * 0.07}rem` }}
            initial={{ fontSize: '3.5rem' }}
            className="hero-logo-text"
          >
            11 listopada
            <br />
            Święto Niepodległości
          </motion.span>
        </>
      )}
    </motion.div>
  );
}
