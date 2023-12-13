import React from 'react'
import './Header.css'
import Logo from '../Logos/Logo/Logo'
import Button from '../Button/Button'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {


  return (
    <header>
      <Logo />
      <nav>
        <Link className='navlink' to="prezentacja" target="_blank" rel="noopener noreferrer" ><span>Przejdź do wyników</span><i className="fa-solid fa-up-right-from-square"></i></Link>
        {/* <button onClick={() => fileDownload(CSVData)} className="navlink">Eksportuj wyniki</button> */}
        {/* <Button fileInput onChange={e => handleCSVFile(e, setCSVData)}>Załaduj z pliku</Button> */}
      </nav>
    </header>
  )
}
