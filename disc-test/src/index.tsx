import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AssessmentPage } from './components/AssessmentPage';
import { ResultsPage } from './components/ResultsPage';

const questions: Array<Question> = [
  {
    text: 'Question 1',
    responses: [
      { text: 'Response 1', type: 'D' },
      { text: 'Response 2', type: 'I' },
      { text: 'Response 3', type: 'S' },
      { text: 'Response 4', type: 'C' },
    ],
  },
  {
    text: 'Question 2',
    responses: [
      { text: 'Response 1', type: 'D' },
      { text: 'Response 2', type: 'I' },
      { text: 'Response 3', type: 'S' },
      { text: 'Response 4', type: 'C' },
    ],
  },
  // Add additional questions as needed...
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <AssessmentPage questions={questions} onSubmit={(results) => console.log(results)} />
        </Route>
        {/* <Route path="/results">
          <ResultsPage results={results} />
        </Route> */}
      </Routes>
    </Router>
  );
}

render(<App />, document.getElementById('root'));
