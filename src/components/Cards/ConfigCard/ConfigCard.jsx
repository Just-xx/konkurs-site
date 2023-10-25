import React from "react";
import "./ConfigCard.css";
import Card from "../Card/Card";
import { useState } from "react";
import { useConfig } from "../../../hooks/useConifg";
import Button from "../../Button/Button";
import { useEffect } from "react";
import { DEFAULT_CONFIG } from "../../../utils/defaultConfig";

export default function ConfigCard() {
  const [selected, setSelected] = useState(DEFAULT_CONFIG.selected);
  const [scaleX, setScaleX] = useState(DEFAULT_CONFIG.scaleX);
  const [size, setSize] = useState(DEFAULT_CONFIG.size);
  const [text, setText] = useState(DEFAULT_CONFIG.text);

  const handleChange = (e, setFunc) => {
    setFunc(e.target.value);
  };

  const handleReset = (e) => {
    setSelected(DEFAULT_CONFIG.selected);
    setScaleX(DEFAULT_CONFIG.scaleX);
    setSize(DEFAULT_CONFIG.scaleX);
    setText(DEFAULT_CONFIG.text);
  };

  const { getConfig } = useConfig({ selected, scaleX, size, text });

  useEffect(() => {
    const storageConfig = getConfig();
    if (storageConfig) {
      setSelected(storageConfig.selected)
      setScaleX(storageConfig.scaleX)
      setSize(storageConfig.size)
      setText(storageConfig.text)
    }
  }, [])

  return (
    <Card>
      <div className="config-wrapper">
        <h1>Ustawienia logotypu</h1>
        <form className="config-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="logo-variant">Wariant</label>
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
          <label htmlFor="text">Wyświetl tekst</label>
          <div className="checkbox">
            <div className="input-checkbox">
              <input
                type="checkbox"
                name="text"
                id="text"
                checked={text}
                onChange={() => setText(!text)}
              />
              <i className="fa-solid fa-check"></i>
            </div>
            <label htmlFor="text">"Święto Niepodległości"</label>
          </div>
          <Button secondary onClick={handleReset}>
            Resetuj zmiany
          </Button>
        </form>
      </div>
    </Card>
  );
}
