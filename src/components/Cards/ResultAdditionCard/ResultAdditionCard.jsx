import React from 'react';
import Card from '../Card/Card';
import './ResultAdditionCard.css';
import Button from '../../Button/Button'
import logo from '../../../assets/logo4.png'
import { useCSVData } from '../../../hooks/useCSVData';
import { useRef, useContext } from 'react';
import { TLContext } from '../../../contexts/TLContext';

export default function ResultAdditionCard() {

  const { addResult } = useCSVData();

  const classInputRef = useRef();
  const scoreInputRef = useRef();

  const handleResultAddition = e => {
    e.preventDefault();
    addResult(scoreInputRef.current.value, classInputRef.current.value)
  }


  const tlHandler = useContext(TLContext);


  return (
    <Card>
      <div className="result-addition-wrapper">
        <h1>Dodaj nowy wynik</h1>
        <form>
          {tlHandler.layout.map(field => (
            <>
              <label htmlFor={field}>{field}</label>
              <input type="text" id={field} />
            </>
          ))}
          <Button onClick={handleResultAddition} secondary>Dodaj<i className="fa-solid fa-circle-plus"></i></Button>
        </form>
        <img draggable="false" src={logo} alt="" className='bg-logo' />
      </div>
    </Card>
  )
}
