import { useEffect } from "react";
import { useStateStorage } from "./useStateStorage";

export function useTable(tlHandler) {
  const [records, setRecords, recordsFetch] = useStateStorage("records", []);
  const tableLayout = tlHandler.layout;

  const [sortActive, setSortActive] = useStateStorage("sort-active", true);
  const [sortby, setSortby] = useStateStorage("sortby", "");
  const [autoPlace, setAutoPlace] = useStateStorage("auto-place", true);

  function addRecord(record) {
    
    const emptyRecord = Object.fromEntries(tableLayout.map((field) => [field, "-"]));
    let newRecord = {...emptyRecord, ...record};

    let newRecordsState = [...records, newRecord];
    const sorted = sort(newRecordsState);
    setRecords(sorted || newRecordsState);
  }

  function deleteRecord(index) {
    const filtredRecords = records.filter((r, i) => i !== index);
    const newRecordsState = sort(filtredRecords) || filtredRecords;
    setRecords(newRecordsState);
  }

  function editRecord(index, fieldName, newValue) {
    setRecords(
      records.map((r, i) => {
        if (i === index) r[fieldName] = newValue;
        return r;
      })
    );
  }

  function sort(state) {
    if (state.length && sortActive) {
      let newRecordsState = state;

      if (tableLayout.indexOf(sortby) + 1) {
        newRecordsState = state.sort((a, b) => {
          return parseInt(b[sortby]) - parseInt(a[sortby]);
        });
      }

      if (autoPlace && tableLayout.indexOf("Miejsce") + 1) {
        newRecordsState = newRecordsState.map((record, i) => {
          record["Miejsce"] = i + 1;
          return record;
        });
      }

      return newRecordsState;
    }

    return false;
  }

  function trySort() {
    const sorted = sort(records);
    if (sorted) setRecords(sorted);
  }

  useEffect(trySort, [sortby, sortActive, autoPlace]);

  function isAutoPlacePossible() {
    if (tableLayout.indexOf("Miejsce") + 1 && sortActive) return true;
    return false;
  }

  function clear() {
    setRecords([]);
  }

  function getSortedRecordEntries(record) {
    return Object.entries(record).sort(
      (valA, valB) =>
        tableLayout.indexOf(valA[0]) - tableLayout.indexOf(valB[0])
    );
  }

  function getFetchInterval() {
    console.info(
      "Strona pobiera dane co 200ms, może to powodować spadek wydajności"
    );
    return setInterval(recordsFetch, 200);
  }

  return {
    records,
    addRecord,
    deleteRecord,
    editRecord,
    getSortedRecordEntries,
    fetch,
    getFetchInterval,
    clear,
    isAutoPlacePossible,
    trySort,
    sortActive,
    setSortActive,
    sortby,
    setSortby,
    autoPlace,
    setAutoPlace,
    tableLayout
  };
}
