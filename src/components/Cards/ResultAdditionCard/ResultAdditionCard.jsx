import React from "react";
import Card from "../Card/Card";
import "./ResultAdditionCard.css";
import Button from "../../Button/Button";
import { useRef, useContext } from "react";
import { TLContext } from "../../../contexts/TLContext";
import { TableContext } from "../../../contexts/TableContext";

export default function ResultAdditionCard() {
  const tlHandler = useContext(TLContext);
  const table = useContext(TableContext);

  const inputRefs = useRef([]);

  function clearRefs() {
    inputRefs.current = Object.fromEntries(
      Object.entries(inputRefs.current).filter(entrie => entrie[1] !== null)
    );
  }

  const handleResultAddition = e => {

    clearRefs();
    e.preventDefault();

    let record = {};

    Object.values(inputRefs.current).forEach(ref => {
      const field = ref.dataset.field;
      const val = ref.value;
      record = { ...record, [field]: val };
    });


    table.addRecord(record);
  };

  return (
    <Card inactive={!tlHandler.approved}>
      <div className={`result-addition-wrapper`}>
        <h1>Dodaj nowy wynik</h1>
        <form onSubmit={handleResultAddition}>
          <div className="inputs-wrapper">
            {tlHandler.layout.map((field, i) => !(field === "Miejsce" && table.autoPlace) && (
              <div className="input-wrapper" key={field}>
                <label htmlFor={field}>{field}</label>
                <input
                  type="text"
                  id={field}
                  data-field={field}
                  ref={e => (inputRefs.current[field] = e)}
                />
              </div>
            ))}
          </div>
          <Button onClick={handleResultAddition} secondary>
            Dodaj<i className="fa-solid fa-circle-plus"></i>
          </Button>
        </form>
      </div>
    </Card>
  );
}
