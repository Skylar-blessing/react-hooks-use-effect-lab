import React, { useState, useEffect } from 'react';

function Question(props) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeRemaining]);

  useEffect(() => {
    if (timeRemaining === 0) {
      setTimeRemaining(10);
      props.onAnswered(false);
    }
  }, [timeRemaining]);

  return (
    <div>
      <h2>{props.question}</h2>
      <ul>
        {props.answers.map(answer => (
          <li key={answer}>
            <button>{answer}</button>
          </li>
        ))}
      </ul>
      <p>Time remaining: {timeRemaining}</p>
    </div>
  );
}

export default Question;
