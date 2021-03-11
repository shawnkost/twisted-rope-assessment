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
  const [errMsg, setErrMsg] = useState("");

  const viewPastResponses = () => {
    setToggleModal(!toggleModal);
  };

  const grabValue = (value) => {
    setResults(value.answer);
    setAllResults((allResults) => [value.answer, ...allResults]);
  };

  const updateLoader = (value) => {
    setLoader(value);
  };

  return (
    <div className="text-center">
      <h1 className="font-60">Magic 8-Ball</h1>
      <div className="text-center d-inline-block eight-ball-container">
        <img
          src={magic8Ball}
          alt="magic 8 ball"
          style={{ width: "100%" }}
          className={loader ? "shake" : ""}
        ></img>
      </div>
      <div className="mb-2 font-20">{results}</div>
      <Form results={grabValue} loading={updateLoader} />
      <div>
        <button onClick={viewPastResponses} className="font-20">
          View previous results
        </button>
        {toggleModal ? (
          <Modal toggle={viewPastResponses} allResults={allResults} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
