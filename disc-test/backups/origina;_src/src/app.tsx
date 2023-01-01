import React, { useState } from 'react';
import DiscTest from './disc-test';
import DiscResults from './disc-results';
import { Question, Result } from './disc-types';

const questions: Question[] = [
  {
    id: 1,
    text: 'Question 1',
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
  {
    id: 2,
    text: 'Question 2',
    options: ['Option 1', 'Option 2', 'Option 3'],
  }
  // ...
];

const results: Result[] = [
  {
    category: 'Category 1',
    score: 5,
    description: 'Description of category 1',
  },
  {
    category: 'Category 2',
    score: 2,
    description: 'Description of category 2',
  }
  // ...
];

const App: React.FC = () => {
  const [showResults, setShowResults] = useState(false);
  const [userResponses, setUserResponses] = useState<Question[]>([]);

  const handleComplete = (responses: Question[]) => {
    setUserResponses(responses);
    setShowResults(true);
  };

  return (
    <div className="app">
      {showResults ? (
        <DiscResults results={results} />
      ) : (
        <DiscTest questions={questions} onComplete={handleComplete} />
      )}
    </div>
  );
};

export default App;