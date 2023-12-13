import { useEffect } from "react";
import { useStateStorage } from "./useStateStorage";
import debounce from "lodash.debounce";

class TableHandler {
  constructor(tableLayout) {
    const [records, setRecords, fetch] = useStateStorage("records", []);
    this.records = records;
    this.setRecords = setRecords;
    this.recordsFetch = fetch;

    this.tableLayout = tableLayout;

    const [sortActive, setSortActive] = useStateStorage("sort-active", true);
    const [sortby, setSortby] = useStateStorage("sortby", this.tableLayout[0]);
    const [autoPlace, setAutoPlace] = useStateStorage("auto-place", true);

    this.sortActive = sortActive;
    this.setSortActive = setSortActive;

    this.sortby = sortby;
    this.setSortby = setSortby;

    this.autoPlace = autoPlace;
    this.setAutoPlace = setAutoPlace;

    this.editing = false;

    this.#sortOnConfigUpdate();
  }

  sort(state) {
    if (state.length && this.sortActive) {
      let newRecordsState = state.sort((a, b) => {
        return parseInt(b[this.sortby]) - parseInt(a[this.sortby]);
      });

      if (this.autoPlace && state[0]["Miejsce"]) {
        newRecordsState = newRecordsState.map((record, i) => {
          record["Miejsce"] = i + 1;
          return record;
        });
      }

      return newRecordsState;
    }
    
    return false;
  }

  sortState() {
    const sorted = this.sort(this.records);
    sorted && this.setRecords(sorted);
  }

  #sortOnConfigUpdate() {
    useEffect(this.sortState.bind(this), [this.sortby, this.sortActive, this.autoPlace]);
  }

  clear() {
    this.setRecords([]);
  }

  getSortedRecordEntries(record) {
    return Object.entries(record).sort(
      (valA, valB) =>
        this.tableLayout.indexOf(valA[0]) - this.tableLayout.indexOf(valB[0])
    );
  }

  getFetchInterval() {
    console.info("Strona pobiera dane co 200ms, może to powodować spadek wydajności")
    return setInterval(this.recordsFetch, 200);
  }

  addRecord(record) {
    let newRecordsState = [...this.records, record];
    const sorted = this.sort(newRecordsState);
    this.setRecords(sorted || newRecordsState);
  }

  deleteRecord(index) {
    this.setRecords(this.records.filter((r, i) => i !== index));
  }

  editRecord(index, fieldName, newValue, e) {
    this.editing = true;

    this.setRecords(
      this.records.map((r, i) => {
        if (i === index) r[fieldName] = newValue;
        return r;
      })
    );

    debounce(() => {
      if (e) {
        e.target.blur();
      } 
      this.editing = false;
      this.sortState();
    }, 5000)();
  }
}

export function useTable(tlHandler) {
  const tableHandler = new TableHandler(tlHandler.layout);
  return tableHandler;
}
