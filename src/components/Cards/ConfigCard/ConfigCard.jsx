import { useContext } from "react";
import "./ConfigCard.css";
import Card from "../Card/Card";
import { TableContext } from "../../../contexts/TableContext";

export default function ConfigCard() {
  const table = useContext(TableContext);

  return (
    <Card>
      <div className="config-wrapper">
        <h1>Ustawienia</h1>
        <form className="config-form" onSubmit={e => e.preventDefault()}>
          <div className="config-form__row">
            <div className="config-form__row__option">
              <label htmlFor="sort">Sortwanie <span className="info-text">
                (malejąco)
              </span></label>
              <div className="checkbox">
                <div className="input-checkbox">
                  <input
                    type="checkbox"
                    name="sort"
                    id="sort"
                    checked={table.sortActive}
                    onChange={() => table.setSortActive(!table.sortActive)}
                  />
                  <i className="fa-solid fa-check"></i>
                </div>
                <label htmlFor="sort">wł./wył.</label>
              </div>
            </div>
            <div className="config-form__row__option">
              <label htmlFor="sortby">Sortuj po:</label>
              <select
                name="sortby"
                id="sortby"
                disabled={!table.sortActive}
                onChange={e => table.setSortby(e.target.value)}
              >
                <option selected={table.sortby === ''} value="none">
                  -
                </option>
                {table.tableLayout.map(
                  (field) =>
                    !(field === "Miejsce" && table.autoPlace) && (
                      <option key={field} value={field} selected={table.sortby === field}>
                        {field}
                      </option>
                    )
                )}
              </select>
            </div>
          </div>
          <div className="config-form__option">
            <label htmlFor="autoplace">
              Automatyczne miejsca{" "}
              <span className="info-text">
                (wymagane pole &quot;Miejsce&quot; i wł. sortowanie)
              </span>
            </label>
            <div
              className={`checkbox ${
                !table.isAutoPlacePossible() ? "checkbox--disabled" : ""
              }`}
            >
              <div className="input-checkbox">
                <input
                  type="checkbox"
                  name="autoplace"
                  id="autoplace"
                  checked={
                    table.autoPlace &&
                    table.sortActive &&
                    table.isAutoPlacePossible()
                  }
                  onChange={() => table.setAutoPlace(!table.autoPlace)}
                />
                <i className="fa-solid fa-check"></i>
              </div>
              <label htmlFor="autoplace">wł./wył.</label>
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
}
