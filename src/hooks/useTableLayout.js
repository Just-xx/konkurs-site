import { useState } from "react";
import { useStateStorage } from "./useStateStorage";

const DEFAULT_LAYOUT = ["Miejsce", "Punkty", "Klasa"]

class TableLayoutHandler {
  constructor() {
    const [approved, setApproved] = useStateStorage('table-layout-approved', false);
    const [tlayout, setTlayout] = useStateStorage('table-layout', DEFAULT_LAYOUT)

    this.layout = tlayout;
    this.setLayout = setTlayout;

    this.approved = approved;
    this.setApproved = setApproved;
  }

  addColumn(columnName) {
    if (this.layout.length > 10) return false;
    this.setLayout([...this.layout, columnName])
    return true;
  }

  setColumnName(index, newName) {
    const newState = [...this.layout];
    newState[parseInt(index)] = newName;
    this.setLayout(newState);
  }

  deleteColumn(index) {
    if (this.layout.length <= 1) return;
    const newState = this.layout.filter((cname, i) => i !== parseInt(index));
    this.setLayout(newState);
  }

  approve() {
    this.setApproved(true);
  }

  disapprove() {
    this.setApproved(false)
  }
}


export function useTableLayout() {
  const tableLayoutHandler = new TableLayoutHandler();
  return tableLayoutHandler;
}