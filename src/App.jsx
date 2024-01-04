import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import Presentation from "./pages/Presentation";
import { theme, GlobalStyles } from "./theme";
import { ThemeProvider } from "styled-components";
import CreateTable from "./pages/CreateTable";
import CreateTableNext from "./pages/CreateTableNext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/prezentacja",
    element: <Presentation />,
  },
  {
    path: "/create-table",
    element: <CreateTable />,
  },
  {
    path: "/create-table-next",
    element: <CreateTableNext />,
  },
]);

function App() {


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div id="app-container">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
