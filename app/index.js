import React from "react";
import ReactDOM from "react-dom";
import CherryBlossom from "./style_guide";
import "./app_styles.css";

function App() {
    return (
        <div className="App">
              <CherryBlossom />
        </div>
    );
}

const rootElement = document.getElementById("app");
console.log(document.getElementById(rootElement));
ReactDOM.render(<App />, rootElement);