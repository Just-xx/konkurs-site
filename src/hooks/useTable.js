import { useStateStorage } from "./useStateStorage";

class TableHandler {
  
  constructor(tableLayout) {
    const [records, setRecords] = useStateStorage('records', []);
    this.records = records;
    this.setRecords = setRecords;
    this.tableLayout = tableLayout;
  }

  addRecord(record) {
    this.setRecords([...this.records, record]);
  }

  deleteRecord(i) {

  }

  editRecord(i, recordI) {

  }

  
}


export function useTable(tlHandler) {
  const tableHandler = new TableHandler(tlHandler.layout);
  return tableHandler;
}