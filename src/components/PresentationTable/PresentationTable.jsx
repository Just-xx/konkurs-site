import React from "react";
import "./PresentationTable.css";
import { useContext } from "react";
import { useEffect } from "react";
import { TableContext } from "../../contexts/TableContext";
import { getBadge } from "../../utils/getBadge";

export default function PresentationTable() {
  
  const table = useContext(TableContext);

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
              <React.Fragment key={field[0]}>
                {field[0] === "Miejsce" && field[1] <= 3 ? (
                  <td className="badge">{getBadge(field[1])}</td>
                ) : (
                  <td>{field[1]}</td>
                )}
              </React.Fragment>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
