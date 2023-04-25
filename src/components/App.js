import React, { useState } from "react";
import Question from "./Question";
import data from "./data";

function App() {
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [score, setScore] = useState(0);

function handleAnswered(isCorrect) {
if (isCorrect) {
setScore((prevScore) => prevScore + 1);
}

if (currentQuestionIndex === data.length - 1) {
  alert(`Game over! Your score is ${score}`);
} else {
  setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
}
}

const currentQuestion = data[currentQuestionIndex];

return (
<div>
<Question question={currentQuestion} onAnswered={handleAnswered} />
</div>
);
}

export default App;
