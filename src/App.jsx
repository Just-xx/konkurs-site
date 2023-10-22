import { CSVDataContext } from './context/CSVDataContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './pages/Index';
import { useState } from 'react';
import Presentation from './pages/Presentation';
import { useLocalStorage } from './hooks/useLocalStorage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/prezentacja',
    element: <Presentation />
  }
])



function App() {

  const [CSVData, setCSVData] = useState(null);
  useLocalStorage(setCSVData, CSVData);

  return (
    <CSVDataContext.Provider value={{CSVData, setCSVData}}>
      <div id="app-container">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </CSVDataContext.Provider>
  ) 
}

export default App
