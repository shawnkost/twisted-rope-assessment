import React from "react";

export default function Modal(props) {

  // calling the toggle function in App.js to update state
  const handleClick = () => {
    props.toggle();
  };

  const mapResponses = () => {
    const mapResults = props.allResults.map((response, index) => {
      console.log("response", response);
      return (
        <tr key={index}>
          <td className="table-question">
            {response.question}
          </td>
          <td className="table-answer">
            {response.answer}
          </td>
        </tr>
      )
    });
    return mapResults;
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
        <button className="font-20" onClick={handleClick}>Exit</button>
      </div>
    </>
  );
}
