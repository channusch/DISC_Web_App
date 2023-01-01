import React, { useState } from 'react';

type Props = {
  questions: Array<Question>;
  onSubmit: (results: Results) => void;
};

export function AssessmentPage({ questions, onSubmit }: Props) {
  const [results, setResults] = useState<Results>({ D: 0, I: 0, S: 0, C: 0 });

  function handleResponse(type: 'D' | 'I' | 'S' | 'C') {
    setResults((prevResults) => ({
      ...prevResults,
      [type]: prevResults[type] + 1,
    }));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    onSubmit(results);
  }

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question) => (
        <div key={question.text}>
          <p>{question.text}</p>
          {question.responses.map((response) => (
            <label key={response.text}>
              <input
                type="radio"
                name={question.text}
                value={response.type}
                onChange={() => handleResponse(response.type)}
              />
              {response.text}
            </label>
          ))}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
