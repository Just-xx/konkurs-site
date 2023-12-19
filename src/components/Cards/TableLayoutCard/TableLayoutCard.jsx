import React, { useContext, useState } from "react";
import "./TableLayoutCard.css";
import Card from "../Card/Card";
import Button from "../../Button/Button";
import { TLContext } from "../../../contexts/TLContext";
import { TableContext } from "../../../contexts/TableContext";
import Modal from "../../Modal/Modal";

export default function TableLayoutCard() {
  const tlHandler = useContext(TLContext);
  const table = useContext(TableContext);

  const [editing, setEditing] = useState(false);
  const [maxColReached, setMaxReached] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  function handleAdd() {
    setMaxReached(!tlHandler.addColumn(`Nowa ${tlHandler.layout.length + 1}`));
  }

  function handleEdit(e) {
    tlHandler.setColumnName(e.target.dataset.index, e.target.value);
  }

  function handleDelete(e) {
    setMaxReached(false);
    tlHandler.deleteColumn(e.target.dataset.index);
  }

  function disapprove() {
    tlHandler.disapprove();
    table.clear();
  }

  return (
    <>
      <Modal
        visible={modalVisible}
        close={() => setModalVisible(false)}
        action={disapprove}
        title="Uwaga"
        text="Ta akcja spowoduje usunięcie wszytskich danych z tabeli. Czy chcesz kontynuować?"
      />
      <Card>
        <h1>{tlHandler.approved ? "Układ tabeli" : "Stwórz układ tebeli"}</h1>
        <div
          className={`tl-config-wrapper ${
            tlHandler.approved ? "tl-config-wrapper--approved" : ""
          }`}
        >
          <div className="tl-wrapper">
            {tlHandler.layout.map((colName, i) => (
              <div
                className={`tl-wrapper__item ${
                  tlHandler.approved ? "tl-wrapper__item--approved" : ""
                } ${colName === "Miejsce" ? "tl-wrapper__item--special" : ""}`}
                key={i}
              >
                <input
                  onClick={() => setEditing(true)}
                  onBlur={() => setEditing(false)}
                  onChange={e => handleEdit(e)}
                  value={colName}
                  className={`tl-wrapper__item__input ${
                    editing ? "" : "disabled"
                  }`}
                  data-index={i}
                ></input>
                {tlHandler.layout.length > 1 && (
                  <button
                    onClick={handleDelete}
                    data-index={i}
                    className="tl-wrapper__item__delete"
                  >
                    <i data-index={i} className="fa-solid fa-trash"></i>
                  </button>
                )}
              </div>
            ))}
          </div>
          {!tlHandler.approved && (
            <button onClick={handleAdd} className="tl-wrapper__add-item">
              <i className="fa-solid fa-circle-plus"></i>
            </button>
          )}
        </div>
        <Button
          secondary={tlHandler.approved}
          allWidth
          center
          onClick={() =>
            tlHandler.approved ? setModalVisible(true) : tlHandler.approve()
          }
        >
          {tlHandler.approved ? (
            <>
              Zmień układ
              <span style={{ opacity: 0.3, marginLeft: "8px" }}>
                (UWAGA: spowoduje usunięcie danych z tabeli)
              </span>
            </>
          ) : (
            <>Zatwierdź układ</>
          )}
        </Button>
      </Card>
    </>
  );
}
