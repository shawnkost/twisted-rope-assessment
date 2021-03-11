import React, { useState } from "react";

export default function Form(props) {
  const [question, setQuestion] = useState("");

  const handleChange = event => {
    setQuestion(event.target.value);
  }

  const grabResults = async event => {
    event.preventDefault();
    if (question.substr(-1) === "?") {
      try {
        let params = encodeURIComponent(`${question}`);
        let uri = "https://8ball.delegator.com/magic/JSON/" + params;
        const fetchRequest = await fetch(uri);
        const results = await fetchRequest.json();
        props.results(results.magic);
        setQuestion("");
      } catch {
        console.error("The request failed");
      }
    } else {
      console.error("You need to include a question mark at the end of your question");
    }
  };

  return (
    <form onSubmit={grabResults}>
      <div className="text-center">
        <input
          type="text"
          placeholder="What is your question?"
          className="text-center font-20"
          onChange={handleChange}
          value={question}
          required
        ></input>
        <div>
          <button type="submit">Ask the Magic 8-Ball</button>
        </div>
      </div>
    </form>
  );
}
