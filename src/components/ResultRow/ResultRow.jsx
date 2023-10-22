import React from 'react'
import { useCSVData } from '../../hooks/useCSVData';
import './ResultRow.css';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export default function ResultRow({ line }) {

  const scoreRef = useRef()
  const classRef = useRef()

  const [scoreEdit, setScoreEdit] = useState(false)
  const [classEdit, setClassEdit] = useState(false)


  const { removeResult, editResult } = useCSVData();



  const handleDelete = e => {
    removeResult(e.target.dataset.lineId);
  }

  const handleClick = e => {
    if (e.target.dataset.itemType === "score") setScoreEdit(true)
    else if (e.target.dataset.itemType === "class") setClassEdit(true)
  }

  useEffect(() => classEdit ? classRef.current.focus() : undefined, [classEdit])
  useEffect(() => scoreEdit ? scoreRef.current.focus() : undefined, [scoreEdit])

  const handleSubmitClass = () => {
    editResult(line[0], line[2], classRef.current.value)
    setClassEdit(false);
  }
  
  const handleSubmitScore = () => {
    editResult(line[0], scoreRef.current.value, line[3])
    setScoreEdit(false);
  }

  const onKeyEnter = (e, func) => {
    if (e.key === "Enter") func();
  }

  return (
    <div className='row' data-line-id={line[0]} key={line[0]}>
      {line.map((item, index) => {
        if (index === 0) return;
        return (
            <React.Fragment key={item}>
              {(item === line[2]) && (
                <span onClick={handleClick} className='item'>
                  {scoreEdit ? 
                    <input className='item-input 'data-item-type="score" onBlur={handleSubmitScore} onKeyDown={e => onKeyEnter(e, handleSubmitScore)} ref={scoreRef} type="text" name="item-input" id="item-input" /> :
                    <span className='item-text'  data-item-type="score">{item}</span>
                  }
                </span>
              )}
              {(item === line[3]) && (
                <span onClick={handleClick} className='item'>
                  {classEdit ? 
                    <input className='item-input' data-item-type="class" onBlur={handleSubmitClass} onKeyDown={e => onKeyEnter(e, handleSubmitClass)} ref={classRef} type="text" name="item-input" id="item-input" /> :
                    <span className='item-text' data-item-type="class">{item}</span>
                  }
                </span>
              )}
              {(item !== line[2] && item !== line[3]) && (
                <span onClick={handleClick} className='item'>
                  <span className='item-text place'>{item}</span>
                </span>
              )}
            </React.Fragment>
          )
        }
        )}
      <i onClick={handleDelete} data-line-id={line[0]} className="fa-solid fa-trash"></i>
    </div>
  )
}
