import React from 'react'
import { useContext } from 'react';
import { CSVDataContext } from '../context/CSVDataContext';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function Presentation() {

  const { CSVData, setCSVData } = useContext(CSVDataContext);

  return (
    <div>
        <table>
          <tbody>
            {CSVData && CSVData.map(line => <tr key={line}>{line.map(item => <td key={item}>{item}</td>)}</tr>)}
          </tbody>
        </table>
      </div>
  )
}
