import React, { useState } from "react";
import './App.css';
import magic8Ball from "./img/8ball.png";
import Form from "./components/Form";

function App() {
   const [results, setResults] = useState([]);

   const responses = [];

  const grabValue = (value) => {
    setResults(value.answer);
    responses.push(value.answer);
  }

  return (
    <div className="text-center">
      <h1 className="font-60">Magic 8-Ball</h1>
      <div className="8-ball-container">
        <img src={magic8Ball} alt="magic 8 ball"></img>
      </div>
      <div>{results}</div>
      <Form results={grabValue} />
      <div>
        <button>View previous results</button>
      </div>
    </div>
  );
}

export default App;
