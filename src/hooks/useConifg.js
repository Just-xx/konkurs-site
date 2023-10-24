import { useEffect } from "react";

const getConfig = () => {
  const config = localStorage.getItem("config");
  console.log(config)
  if (config) return JSON.parse(config);
  return {};
};

export const useConfig = (config) => {


  if (config) {
    const { selected, scaleX, size, text } = config;
    useEffect(() => {
      localStorage.setItem("config", JSON.stringify({ selected, scaleX, size }));
    }, [selected, scaleX, size, text]);
  }


  return {
    getConfig
  };
};
