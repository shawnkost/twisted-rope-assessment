import React from "react";

export default function Modal(props) {
  const handleClick = () => {
    props.toggle();
  };

  const mapResponses = () => {
    const mapResults = props.allResults.map((response, index) => {
      return <div key={index}>{response}</div>
    });
    return mapResults;
  };

  return (
    <>
      <div className="modal" onClick={handleClick}>
        {mapResponses()}
      </div>
    </>
  );
}
