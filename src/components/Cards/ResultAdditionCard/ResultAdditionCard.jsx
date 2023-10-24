import React from 'react';
import Card from '../Card/Card';
import './ResultAdditionCard.css';
import Button from '../../Button/Button'
import logo from '../../../assets/logo3.png'
import { useCSVData } from '../../../hooks/useCSVData';
import { useRef } from 'react';

export default function ResultAdditionCard() {

  const { addResult } = useCSVData();

  const classInputRef = useRef();
  const scoreInputRef = useRef();

  const handleResultAddition = e => {
    e.preventDefault();
    addResult(scoreInputRef.current.value, classInputRef.current.value)
  }


  return (
    <Card>
      <div className="result-addition-wrapper">
        <h1>Dodaj nowy wynik</h1>
        <form>
          <label htmlFor="class">Klasa</label>
          <input type="text" id="class" ref={classInputRef} />
          <label htmlFor="score">Punkty</label>
          <input type="text" id="score" ref={scoreInputRef} />
          <Button onClick={handleResultAddition} secondary>Dodaj<i className="fa-solid fa-circle-plus"></i></Button>
        </form>
        <img draggable="false" src={logo} alt="" className='bg-logo' />
      </div>
    </Card>
  )
}
