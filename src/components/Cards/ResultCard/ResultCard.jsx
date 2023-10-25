import React from 'react';
import Card from '../Card/Card';
import { useContext } from 'react';
import { CSVDataContext } from '../../../context/CSVDataContext';
import './ResultCard.css';
import ResultRow from './ResultRow/ResultRow';

export default function ResultCard() {

  const { CSVData, setCSVData } = useContext(CSVDataContext)

  return (
    <Card>
      <div className="result-wrapper">
        <h1>Wyniki</h1>
        {(CSVData !== undefined && CSVData?.length > 0) ? (
          <div className="results">
            <div className="row head-row">
              <span>Miejsce</span>
              <span>Punkty</span>
              <span>Klasa</span>
            </div>
            {CSVData && CSVData.map(line => <ResultRow line={line} key={line[0]} />)}
          </div>
          ) : (
            <div className='no-results'>brak wyników, zaimportuj z pliku lub dodaj nowy wynik</div>
          )
          
          }
      </div>
    </Card>
  )
}
