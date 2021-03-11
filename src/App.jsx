import React, { useState } from "react";
import "./App.css";
import magic8Ball from "./img/8ball.png";
import Form from "./components/Form";
import Modal from "./components/Modal";

function App() {
  const [loader, setLoader] = useState(false);
  const [results, setResults] = useState([]);
  const [allResults, setAllResults] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);

  //toggles modal with past 10 responses
  const viewPastResponses = () => {
    setToggleModal(!toggleModal);
  };

  const clearResponses = () => {
    setAllResults("");
  }

  //adds to state arr if there is 10 values or less, otherwise we remove the last element and push
  const grabValue = (value) => {
    setResults(value.answer);
    if (allResults.length <= 9) {
      setAllResults((allResults) => [value, ...allResults]);
    } else {
      const arr = allResults;
      arr.pop();
      setAllResults((arr) => [value, ...arr]);
    }
  };

  const updateLoader = (value) => {
    setLoader(value);
  };

  return (
    <div className="container">
      <h1 className="font-60">Magic 8-Ball</h1>
      <div className="eight-ball-container">
        <img
          src={magic8Ball}
          alt="magic 8 ball"
          className={loader ? "shake eight-ball-img" : "eight-ball-img"}
        ></img>
      </div>
      <div className="font-20 answer">{results}</div>
      <Form results={grabValue} loading={updateLoader} />
      <div>
        <button onClick={viewPastResponses} className="font-20">
          View previous results
        </button>
        {toggleModal ? (
          <Modal toggle={viewPastResponses} allResults={allResults} clear={clearResponses} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
