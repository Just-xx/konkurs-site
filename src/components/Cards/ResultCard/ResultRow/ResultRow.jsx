import "./ResultRow.css";
import { useContext, useRef } from "react";
import { TableContext } from "../../../../contexts/TableContext";
import PropTypes from "prop-types";
import { getBadge } from "../../../../utils/getBadge";
import React from "react";

export default function ResultRow({ record, i }) {
  const table = useContext(TableContext);
  const rowRef = useRef(null);

  function handleChange(e) {
    const index = i;
    const field = e.target.dataset.field;
    table.editRecord(index, field, e.target.value, e);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") e.target.blur();
  }

  function handleSubmtion() {
    table.trySort();
    // rowRef.current.style.backgroundColor = "var(--warning)";
    // setTimeout(() => (rowRef.current.style.backgroundColor = "inherit"), 500);
    // e.target.style.color = "var(--warning)";
    // setTimeout(() => e.target.style.color = "inherit", 500);
  }

  return (
    <tr data-index={i} ref={rowRef}>
      {table.getSortedRecordEntries(record).map(val => (
        <React.Fragment key={val[0]}>
          {val[0] === "Miejsce" && val[1] <= 3 ? (
            <td className="badge">
              <input
                onBlur={handleSubmtion}
                onKeyDown={handleKeyDown}
                className="table-input"
                data-field={val[0]}
                type="text"
                value={getBadge(val[1])}
                onChange={handleChange}
              />
            </td>
          ) : (
            <td>
              <input
                onBlur={handleSubmtion}
                onKeyDown={handleKeyDown}
                className="table-input"
                data-field={val[0]}
                type="text"
                value={val[1]}
                onChange={handleChange}
              />
            </td>
          )}
        </React.Fragment>
      ))}
      <i
        data-index={i}
        onClick={e => table.deleteRecord(parseInt(e.target.dataset.index))}
        className="fa-solid fa-trash"
      ></i>
    </tr>
  );
}

ResultRow.propTypes = {
  record: PropTypes.object.isRequired,
  i: PropTypes.number.isRequired,
};
