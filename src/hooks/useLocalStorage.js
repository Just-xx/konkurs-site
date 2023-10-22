import { useEffect } from "react";
import { parseCSV } from "../utils/parseCSV";
import { stringifyCSVData } from "../utils/stringifyCSVData";
import { useCallback } from "react";

function setCSVDataStorage(CSVData) {
  localStorage.setItem("CSVData", stringifyCSVData(CSVData));
  dispatchEvent(new Event("storageChange"));
}

function isCSVEqual(CSVData, CSVDataStorage) {
  if (CSVData.length !== CSVDataStorage.length) return false;
  if (
    CSVData.filter(
      (line, index) => line.length !== CSVDataStorage[index].length
    ).length > 0
  )
    return false;

  const flatCSVDataStorage = CSVDataStorage.flat();
  if (
    CSVData.flat().filter((item, index) => item !== flatCSVDataStorage[index])
      .length > 0
  )
    return false;

  return true;
}

function sortResults(CSVData, setCSVData) {
  let CSVDataCopy = new Array(...CSVData);
  let place = 1;

  CSVDataCopy.sort((a, b) => b[2] - a[2]);

  CSVDataCopy = CSVDataCopy.map((line) => {
    line[1] = String(place);
    place++;
    return line;
  });

  console.log(CSVDataCopy);
  setCSVData(CSVDataCopy);
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
      sortResults(CSVData, setCSVData);
      setCSVDataStorage(CSVData);
    }
  }, [CSVData]);
}
