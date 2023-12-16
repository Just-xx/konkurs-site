import React from "react";
import Card from "../Card/Card";
import { useContext } from "react";
import "./ResultCard.css";
import { TableContext } from "../../../contexts/TableContext";
import ResultRow from "./ResultRow/ResultRow";
import { TLContext } from "../../../contexts/TLContext";

export default function ResultCard() {
  const table = useContext(TableContext);
  const tlHandler = useContext(TLContext)

  return (
    <Card inactive={!tlHandler.approved}>
      <div className="result-wrapper">
        <h1>Wyniki</h1>
        <div className="results">
          <table className="table">
            <thead>
              <tr>
                {table.tableLayout.map(field => (
                  <th key={field} className={`${(table.autoPlace && field === "Miejsce") ? "special-field" : ""}`}>{field}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.records.map((record, i) => (
                <ResultRow key={i} i={i} record={record} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
}
