import { useContext } from "react";
import { CSVDataContext } from "../context/CSVDataContext";

class CSVDataHandler {
  
  constructor() {
    const { CSVData, setCSVData } = useContext(CSVDataContext);
    this.CSVData = CSVData;
    this.setCSVData = setCSVData;
  }
  
  findId(id) {
    return this.CSVData.findIndex(line => line[0] === String(id))
  }

  removeResult(id) {
    this.setCSVData(this.CSVData.filter(l => l[0] !== String(id)))
  }

}

export const useCSVData = () => {
  const { CSVData, setCSVData } = useContext(CSVDataContext);

  const findId = (id) => {
    let pointer = -1;

    CSVData.forEach((line, index) => {
      if (line[0] === String(id)) {
        pointer = index;
        console.log(`${line[0]} => ${index} => ${pointer}`)
      }
    });

    return pointer;
  };

  const removeResult = (id) => {
    const pointer = findId(id);
    let CSVDataCopy = CSVData.filter((l, index) => index !== pointer);
    setCSVData(CSVDataCopy);
  };

  const addResult = (score, className) => {
    return;
    if (CSVData?.length) {
      const id = Math.max(...CSVData.map((line) => parseInt(line[0]))) + 1;
      if (id !== NaN) {
        setCSVData(
          CSVData.concat([
            [String(id), String(0), String(score), String(className)],
          ])
        );
        return;
      }
    }

    setCSVData([[String(0), String(0), String(score), String(className)]]);
  };

  const editResult = (id, score, className) => {

    return;
    const pointer = findId(id);
    setCSVData(
      CSVData.map((line, index) => {
        if (index === pointer) {
          score !== "" ? (line[2] = score) : null;
          className !== "" ? (line[3] = className) : null;
        }
        return line;
      })
    );
  };

  return {
    addResult,
    findId,
    removeResult,
    editResult,
  };
};
