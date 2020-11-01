import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Coffee_and_Ink } from "./components/coffee_and_ink"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Coffee_and_Ink />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
