import React from "react";
import "./PresentationTable.css";
import { useContext } from "react";
import { useEffect } from "react";
import { getBadge } from "../../utils/getBadge";

export default function PresentationTable() {
  

  // useEffect(() => {
  //   const fetchInterval = table.getFetchInterval();
  //   return () => clearInterval(fetchInterval);
  // }, []);

  return (
    <table className="p-table">
      <thead>
      </thead>
      <tbody>
      </tbody>
    </table>
  );
}
