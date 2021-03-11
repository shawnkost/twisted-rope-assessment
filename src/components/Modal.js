import React from "react";

export default function Modal(props) {

  // calling the toggle function in App.js to update state
  const handleClick = () => {
    props.toggle();
  };

  const clearResponses = () => {
    props.clear();
  }

  const mapResponses = () => {
    if (props.allResults) {
      const mapResults = props.allResults.map((response, index) => {
        console.log("response", response);
        return (
          <tr key={index}>
            <td className="table-question">{response.question}</td>
            <td className="table-answer">{response.answer}</td>
          </tr>
        );
      });
      return mapResults;
    }
  };

  return (
    <>
      <div className="modal">
        <table>
          <thead>
            <tr>
              <th>Question</th>
              <th>Answer</th>
            </tr>
          </thead>
          <tbody>{mapResponses()}</tbody>
        </table>
        <div>
          {props.allResults ? <button className="font-20" onClick={clearResponses}>
            Clear Responses
          </button> : null}
        </div>
        <div>
          <button className="font-20" onClick={handleClick}>
            Exit
          </button>
        </div>
      </div>
    </>
  );
}
