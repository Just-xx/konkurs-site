import { useEffect } from "react";

const getConfig = () => {
  const config = localStorage.getItem("config");
  if (config) return JSON.parse(config);
  return {};
};

let firstFetch = false;

export const useConfig = (config) => {


  if (config) {
    const { selected, scaleX, size, text } = config;
    useEffect(() => {
      if (getConfig(config) && !firstFetch) {
        firstFetch = true;
        return undefined;
      }
      localStorage.setItem("config", JSON.stringify({ selected, scaleX, size, text }));
    }, [selected, scaleX, size, text]);
  }


  return {
    getConfig
  };
};
