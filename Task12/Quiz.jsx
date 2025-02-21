

import { useState } from "react";
 import "./Quiz.css";

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: "Paris",
  },
  {
    question: "Which gas do plants primarily use for photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correct: "Carbon Dioxide",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: "Mars",
  },
  {
    question: "In which year did World War II end?",
    options: ["1945", "1939", "1918", "1950"],
    correct: "1945",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correct: "Pacific Ocean",
  },
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerClick = (answer) => {
    if (answer === quizData[currentQuestion].correct) {
      setIsCorrect(true);
      setSelectedAnswer(answer);
    } else {
      setIsCorrect(false);
      setSelectedAnswer(answer);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsCorrect(false);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="quiz-container">
      {quizCompleted ? (
        <h1 className="quiz-completed">Quiz Completed!</h1>
      ) : (
        <div>
          <h2 className="quiz-question">{quizData[currentQuestion].question}</h2>
          <div className="quiz-options">
            {quizData[currentQuestion].options.map((option) => (
              <button key={option} onClick={() => handleAnswerClick(option)} disabled={isCorrect}
                className={`quiz-button ${ selectedAnswer === option ? isCorrect ? "correct" : "wrong" : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedAnswer && (
            <p className={`quiz-feedback ${isCorrect ? "correct-text" : "wrong-text"}`}>
              {isCorrect ? "Correct!" : "Try Again"}
            </p>
          )}
          {isCorrect && (
            <button className="next-button" onClick={handleNextQuestion}>
              Next Question
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizApp;
