import React from "react";
import "./ResultRow.css";
import { useEffect, useContext, useRef } from "react";
import { TableContext } from "../../../../contexts/TableContext";

export default function ResultRow({ record, i }) {
  const table = useContext(TableContext);

  function handleChange(e) {
    const index = i;
    const field = e.target.dataset.field;
    table.editRecord(index, field, e.target.value, e);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") e.target.blur();
  }

  function handleSubmtion(e) {
    e.target.style.color = "var(--warning)";
    setTimeout(() => e.target.style.color = "inherit", 500);
  }

  return (
    <tr data-index={i}>
      {table.getSortedRecordEntries(record).map(val => (
        <td key={val[0]}>
          <input onBlur={handleSubmtion} onKeyDown={handleKeyDown} className="table-input" data-field={val[0]} type="text" value={val[1]} onChange={handleChange} />
        </td>
      ))}
      <i
        data-index={i}
        onClick={e => table.deleteRecord(parseInt(e.target.dataset.index))}
        className="fa-solid fa-trash"
      ></i>
    </tr>
  );
}
