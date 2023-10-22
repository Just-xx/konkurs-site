import React from 'react'
import { useContext } from 'react';
import { CSVDataContext } from '../context/CSVDataContext';
import Header from '../components/Header/Header';
import ResultAdditionCard from '../components/ResultAdditionCard/ResultAdditionCard';
import ResultCard from '../components/ResultCard/ResultCard';

export default function Index() {

  const { CSVData, setCSVData } = useContext(CSVDataContext);

  return (
    <>
      <Header />
      <ResultAdditionCard />
      <ResultCard />
      {/* <div>
      <input onChange={e => handleCSVFile(e, setCSVData)} type="file" name="file" id="file" />
      <button onClick={() => fileDownload(CSVData)}>FILE DOWNLOAD</button>
      </div>
      <div>
      
      </div> */}
    </>

  )
}
