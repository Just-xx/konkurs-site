import React from "react";
import "./PresentationTable.css";
import { useContext } from "react";
import { CSVDataContext } from "../../context/CSVDataContext";
import { useEffect } from "react";
import { parseCSV } from "../../utils/parseCSV";
import { AnimatePresence, motion } from "framer-motion";

export default function PresentationTable() {
  const { CSVData, setCSVData } = useContext(CSVDataContext);

  useEffect(() => {
    setInterval(
      () => setCSVData(parseCSV(localStorage.getItem("CSVData"))),
      100
    );
  }, []);

  return (
    <div className="p-table">
      {CSVData && CSVData.length ? (
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
                initial={{ opacity: 0, translateX: "-200px" }}
                animate={{ opacity: 1, translateX: 0 }}
                exit={{ opacity: 0, translateX: "500px" }}
                transition={{ ease: "easeOut" }}
              >
                {line.map(
                  (item, i) =>
                    i !== 0 && (
                      <span className="p-row-item" key={item}>
                        {item}
                      </span>
                    )
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </>
      ) : null}
    </div>
  );
}
