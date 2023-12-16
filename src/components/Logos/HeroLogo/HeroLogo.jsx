import React from "react";
import "./HeroLogo.css";
import logo from "../../../assets/chirstmas1.png";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function HeroMotionImg(props) {
  return (
    <motion.img
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      exit={{ opacity: 0 }}
      {...props}
    />
  );
}

export default function HeroLogo() {
  return (
    <motion.div className="hero-logo">
      <AnimatePresence mode="wait">
        <HeroMotionImg key={1} src={logo} alt="" className="hero-logo-img" />
      </AnimatePresence>
      {/* <AnimatePresence>
        <motion.span className="hero-logo-text"></motion.span>
      </AnimatePresence> */}
    </motion.div>
  );
}
