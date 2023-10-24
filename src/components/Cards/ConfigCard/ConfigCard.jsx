import React from "react";
import "./ConfigCard.css";
import Card from "../Card/Card";
import { useState } from "react";
import { useConfig } from "../../../hooks/useConifg";

export default function ConfigCard() {
  const [selected, setSelected] = useState("logo1");
  const [scaleX, setScaleX] = useState(50);
  const [size, setSize] = useState(50);
  const [text, setText] = useState(true);

  const handleChange = (e, setFunc) => {
    setFunc(e.target.value);
  };

  useConfig({ selected, scaleX, size });

  return (
    <Card>
      <div className="config-wrapper">
        <h1>Ustawienia</h1>
        <form action="">
          <label htmlFor="logo-variant">Wybierz logo</label>
          <select
            value={selected}
            onChange={(e) => handleChange(e, setSelected)}
            name="logo-variant"
            id="logo-variant"
          >
            <option value="logo1">logo #1</option>
            <option value="logo2">logo #2</option>
            <option value="logo3">logo #3</option>
          </select>
          <label htmlFor="scale-x">Rozciągnięcie</label>
          <input
            type="range"
            name="scale-x"
            id="scale-x"
            min={1}
            max={100}
            value={scaleX}
            onChange={(e) => handleChange(e, setScaleX)}
          />
          <label htmlFor="scale-x">Skala</label>
          <input
            type="range"
            name="size"
            id="size"
            min={1}
            max={100}
            value={size}
            onChange={(e) => handleChange(e, setSize)}
          />
          {/* <label htmlFor="text">Tekst</label>
          <input type="checkbox" name="text" id="text" /> */}
        </form>
      </div>
    </Card>
  );
}
