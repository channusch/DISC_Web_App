import React from 'react';

type Props = {
  results: Results;
};

export function ResultsPage({ results }: Props) {
  return (
    <ul>
      {Object.entries(results).map(([type, score]) => (
        <li key={type}>{type}: {score}</li>
      ))}
    </ul>
  );
}
