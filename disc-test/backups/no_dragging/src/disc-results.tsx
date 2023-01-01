import React from 'react';
import { Result } from './disc-types';

interface DiscResultsProps {
  results: Result[];
}

const DiscResults: React.FC<DiscResultsProps> = ({ results }) => {
  return (
    <div>
      <h1>Results</h1>
      <ul>
        {results.map(({ category, score, description }) => (
          <li key={category}>
            <h2>{category}</h2>
            <p>Score: {score}</p>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiscResults;