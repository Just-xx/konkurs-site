import React from "react";
import "./PresentationTable.css";
import { useContext } from "react";
import { CSVDataContext } from "../../context/CSVDataContext";
import { useEffect } from "react";
import { parseCSV } from "../../utils/parseCSV";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useConfig } from "../../hooks/useConifg";

export default function PresentationTable() {
  const { CSVData, setCSVData } = useContext(CSVDataContext);

  useEffect(() => {

    const CSVFetchInterval = setInterval(() => {
      setCSVData(parseCSV(localStorage.getItem("CSVData")));
    }, 100);

    return () => clearInterval(CSVFetchInterval)
  }, []);

  return (
    <div className="p-table">
      {CSVData?.length ? (
        <>
          <div className="p-row p-table-head">
            <div className="p-head-item">Miejsce</div>
            <div className="p-head-item">Punkty</div>
            <div className="p-head-item">Klasa</div>
          </div>
          <AnimatePresence>
            {CSVData.map((line) => (
              <motion.div
                className="p-row"
                key={line[0]}
                initial={{ opacity: 0, translateY: "-20px" }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: "20px" }}
                transition={{ ease: "easeOut" }}
              >
                <span className="p-row-item">{line[1]}</span>
                <span className="p-row-item">{line[2]}</span>
                <span className="p-row-item">{line[3]}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </>
      ) : null}
    </div>
  );
}
