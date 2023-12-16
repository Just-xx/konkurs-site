import React from "react";
import "./PresentationTable.css";
import { useContext } from "react";
import { useEffect } from "react";
import { TableContext } from "../../contexts/TableContext";
import { TLContext } from "../../contexts/TLContext";

export default function PresentationTable() {
  const table = useContext(TableContext);
  const tlHandler = useContext(TLContext);

  useEffect(() => {
    const fetchInterval = table.getFetchInterval();
    return () => clearInterval(fetchInterval);
  }, []);

  return (
    <table className="p-table">
      <thead>
        <tr>
          {table.tableLayout.map(field => (
            <th key={field}>{field}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.records.map((record, i) => (
          <tr key={i}>
            {table.getSortedRecordEntries(record).map(field => (
              <td key={field[0]}>{field[1]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
