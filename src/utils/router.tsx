import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Store } from "../store/Store";

function Router() {


  return (
    <BrowserRouter>
      <Provider store={Store}>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default Router;