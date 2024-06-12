import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./index.css";
import Navbar from "./component/navbar";
import App from "./App";
import Shop from "./shop";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Outlet /> {/* Ini untuk menampilkan child routes */}
            </>
          }
        >
          <Route index element={<App />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
