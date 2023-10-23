import React from "react";
import { useCSVData } from "../../hooks/useCSVData";
import "./ResultRow.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export default function ResultRow({ line }) {
  const scoreRef = useRef();
  const classRef = useRef();

  const scoreTextRef = useRef();
  const classTextRef = useRef();

  const [scoreEdit, setScoreEdit] = useState(false);
  const [classEdit, setClassEdit] = useState(false);

  const { removeResult, editResult } = useCSVData();

  const submitionEffect = (ref) => {
    ref.current.style.color = "var(--primary)";
    setTimeout(() => (ref.current.style.color = "#000"), 600);
  };

  const handleDelete = (e) => {
    removeResult(e.target.dataset.lineId);
  };

  const handleClick = (e) => {
    if (e.target.dataset.itemType === "score") setScoreEdit(true);
    else if (e.target.dataset.itemType === "class") setClassEdit(true);
  };

  useEffect(() => {
    classEdit ? classRef.current.focus() : submitionEffect(classTextRef);
  }, [classEdit]);

  useEffect(() => {
    scoreEdit ? scoreRef.current.focus() : submitionEffect(scoreTextRef);
  }, [scoreEdit]);

  const handleSubmitClass = () => {
    editResult(line[0], "", classRef.current.value);
    setClassEdit(false);
  };

  const handleSubmitScore = () => {
    console.log(line[0]);
    editResult(line[0], scoreRef.current.value, "");
    setScoreEdit(false);
  };

  const onKeyEnter = (e, func) => {
    if (e.key === "Enter") func();
  };

  return (
    <div className="row" data-line-id={line[0]}>
      <span className="item">
        <span className="item-text place">{line[1]}</span>
      </span>
      <span onClick={handleClick} className="item">
        {scoreEdit ? (
          <input
            className="item-input "
            data-item-type="score"
            onBlur={handleSubmitScore}
            onKeyDown={(e) => onKeyEnter(e, handleSubmitScore)}
            ref={scoreRef}
            type="text"
            name="item-input"
            id="item-input"
          />
        ) : (
          <span
            className="item-text"
            data-item-type="score"
            ref={scoreTextRef}
            title="Kliknij by edytować"
          >
            {line[2]}
          </span>
        )}
      </span>
      <span onClick={handleClick} className="item">
        {classEdit ? (
          <input
            className="item-input"
            data-item-type="class"
            onBlur={handleSubmitClass}
            onKeyDown={(e) => onKeyEnter(e, handleSubmitClass)}
            ref={classRef}
            type="text"
            name="item-input"
            id="item-input"
          />
        ) : (
          <span
            className="item-text"
            data-item-type="class"
            ref={classTextRef}
            title="Kliknij by edytować"
          >
            {line[3]}
          </span>
        )}
      </span>
      <i
        onClick={handleDelete}
        data-line-id={line[0]}
        className="fa-solid fa-trash"
      ></i>
    </div>
  );
}
