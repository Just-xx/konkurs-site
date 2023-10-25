import { useEffect } from "react";
import { parseCSV } from "../utils/parseCSV";
import { stringifyCSVData } from "../utils/stringifyCSVData";
import { useCallback } from "react";

function setCSVDataStorage(CSVData) {
  localStorage.setItem("CSVData", stringifyCSVData(CSVData));
  dispatchEvent(new Event("storageChange"));
}

function isCSVEqual(CSVData, CSVDataStorage) {
  if (JSON.stringify(CSVData) === JSON.stringify(CSVDataStorage)) return true;
  return false;
}

function sortResults(CSVData) {
  let CSVDataCopy = new Array(...CSVData);
  let place = 1;

  CSVDataCopy.sort((a, b) => b[2] - a[2]);

  CSVDataCopy = CSVDataCopy.map((line) => {
    line[1] = String(place);
    place++;
    return line;
  });

  return CSVDataCopy;
}

export function useLocalStorage(setCSVData, CSVData) {
  useEffect(() => {
    const data = localStorage.getItem("CSVData");
    if (data) setCSVData(parseCSV(data));
    else console.warn("NO LOCAL STORAGE TO LOAD FROM");
  }, []);

  useEffect(() => {
    const CSVDataStorage = localStorage.getItem("CSVData");

    if (CSVData && !isCSVEqual(CSVData, parseCSV(CSVDataStorage))) {
      const sortedCSVData = sortResults(CSVData);
      setCSVData(sortedCSVData);
      setCSVDataStorage(sortedCSVData);
      console.log("state updated");
    }
  }, [CSVData]);
}
