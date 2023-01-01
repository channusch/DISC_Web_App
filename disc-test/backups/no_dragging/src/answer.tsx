import React, { useState } from 'react';
import Draggable, { DraggableData } from 'react-draggable';

const Answer: React.FC<{ answer: string }> = ({ answer }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleStop = (e: any, data: DraggableData) => {
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <Draggable
      position={position}
      onStop={handleStop}
    >
      <div className="answer">
        {answer}
      </div>
    </Draggable>
  );
};

export default Answer;