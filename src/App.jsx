import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import Presentation from "./pages/Presentation";
import { theme, GlobalStyles } from "./theme";
import { ThemeProvider } from "styled-components";
import CreateTable from "./pages/CreateTable";
import CreateTableTheme from "./pages/CreateTableTheme";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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
    path: "/create/table",
    element: <CreateTable />,
  },
  {
    path: "/create/theme/:tableId",
    element: <CreateTableTheme />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div id="app-container">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
