import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './pages/Index';
import Presentation from './pages/Presentation';
import { useTableLayout } from "./hooks/useTableLayout";
import { TLContext } from "./contexts/TLContext";
import { useTable } from "./hooks/useTable";
import { TableContext } from "./contexts/TableContext";

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

  const tlHandler = useTableLayout();
  const tableH = useTable(tlHandler);

  return (
      <div id="app-container">
        <TLContext.Provider value={tlHandler}>
          <TableContext.Provider value={tableH}>
            <RouterProvider router={router} />
          </TableContext.Provider>
        </TLContext.Provider>
      </div>
  ) 
}

export default App
