import { useEffect } from "react";
import { parseCSV } from "../utils/parseCSV";

export function useLocalStorage(setCSVData) {
  useEffect(() => {

    const data = localStorage.getItem('CSVData');
    if (data) setCSVData(parseCSV(data));
    else console.log("no local storage to load from")

  }, [])
}