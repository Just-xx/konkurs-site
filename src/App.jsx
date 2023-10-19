import { handleCSVFile  } from './utils/handleCSVFile'
import { useState, useRef, createContext } from 'react';
import { fileDownload } from './utils/downloadFile';
import { useLocalStorage } from './hooks/useLocalStorage';


const CSVDataContext = createContext('');

function App() {

  const inputRef = useRef()
  const [CSVData, setCSVData] = useState('');
  
  useLocalStorage(setCSVData);

  return (
    <CSVDataContext.Provider value={CSVData}>
      <div>
        <input onChange={e => handleCSVFile(e, setCSVData)} ref={inputRef} type="file" name="file" id="file" />
        <button onClick={() => fileDownload(CSVData)}>FILE DOWNLOAD</button>
      </div>
    </CSVDataContext.Provider>
  )
}

export default App
