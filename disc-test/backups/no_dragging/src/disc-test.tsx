import React, { useState } from 'react';
import { Question, Response } from './disc-types';
import Draggable from 'react-draggable';
import Answer from './answer';

interface DiscTestProps {
  questions: Question[];
  onComplete: (responses: Response[]) => void;
}

// const DiscTest: React.FC = () => {
//   const [questions, setQuestions] = useState<Question[]>([]);

//   return (
//     <div className="disc-test">
//       {questions.map((question) => (
//         <div key={question.id} className="question">
//           {question.text}
//           <div className="answers">
//             {question.options.map((option) => (
//               <Answer key={option.id} answer={option.text} />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

const DiscTest: React.FC<DiscTestProps> = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<Response[]>([]);

  const handleOptionSelect = (questionId: number, option: string) => {
    setResponses((prevResponses) => [
      ...prevResponses,
      { questionId, option },
    ]);
  };

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      onComplete(responses);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const { text, options } = questions[currentQuestion];

  return (
    <div className="disc-test">
      {questions.map((question) => (
        <div key={question.id} className="question">
          {question.text}
          <div className="answers">
            {question.options.map((option) => (
              <Answer key={option.id} answer={option.text} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  // return (
  //   <div>
  //     <h1>{text}</h1>
  //     <ul>
  //       {options.map((option) => (
  //         <li key={option} onClick={() => handleOptionSelect(currentQuestion, option)}>
  //           {option}
  //         </li>
  //       ))}
  //     </ul>
  //     <button onClick={handleNext}>Next</button>
  //   </div>
  // );
};

export default DiscTest;