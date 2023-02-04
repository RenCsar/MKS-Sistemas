import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Store } from "../store/Store";
import { theme } from "./theme";

function Router() {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default Router;