import React from 'react'
import './Header.css'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import { handleCSVFile } from '../../utils/handleCSVFile'
import { useContext } from 'react'
import { CSVDataContext } from '../../context/CSVDataContext';
import { fileDownload } from '../../utils/downloadFile'
import { Link } from 'react-router-dom'

export default function Header() {

  const {CSVData, setCSVData} = useContext(CSVDataContext);

  return (
    <header>
      <Logo />
      <nav>
        <Link className='navlink' to="prezentacja" target="_blank" rel="noopener noreferrer" ><span>Przejdź do wyników</span><i className="fa-solid fa-up-right-from-square"></i></Link>
        <button onClick={() => fileDownload(CSVData)} className="navlink">Eksportuj wyniki</button>
        <Button fileInput onChange={e => handleCSVFile(e, setCSVData)}>Załaduj z pliku</Button>
      </nav>
    </header>
  )
}
