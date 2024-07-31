import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const App = () => {
  return (
    <h1>GitHub Pages로 리액트 프로젝트 배포</h1>
  );
};
export default App;
