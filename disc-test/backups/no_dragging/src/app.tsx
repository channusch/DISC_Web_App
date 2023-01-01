import React, { useState } from 'react';
import DiscTest from './disc-test';
import DiscResults from './disc-results';
import { Question, Response, Result } from './disc-types';

const questions: Question[] = [
  {
    id: 1,
    text: 'Question 1',
    options: [{id: 1, text: 'Option 1'}, {id: 2, text: 'Option 2'}, {id: 3, text: 'Option 3'}],
  },
  {
    id: 2,
    text: 'Question 2',
    options: [{id: 1, text: 'Option 1'}, {id: 2, text: 'Option 2'}, {id: 3, text: 'Option 3'}],
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
  const [userResponses, setUserResponses] = useState<Response[]>([]);

  const handleComplete = (responses: Response[]) => {
    setUserResponses(responses);
    setShowResults(true);
  };

  return (
    <div className="app">
      {showResults ? (
        <DiscResults results={results} />
      ) : (
        <DiscTest questions={questions} onComplete={handleComplete} />
        // <DiscTest />
      )}
    </div>
  );
};

export default App;