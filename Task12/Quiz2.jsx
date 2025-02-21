

// import { useState } from "react";
// import "./Quiz.css";

// const quizData = [
//   {
//     question: "What is the capital of France?",
//     options: ["Berlin", "Madrid", "Paris", "Rome"],
//     correct: "Paris",
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     options: ["Earth", "Mars", "Jupiter", "Venus"],
//     correct: "Mars",
//   },
//   {
//     question: "What is the largest ocean on Earth?",
//     options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
//     correct: "Pacific Ocean",
//   },
// ];

// const QuizApp = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [quizCompleted, setQuizCompleted] = useState(false);

//   const handleAnswerClick = (answer) => {
//     if (answer === quizData[currentQuestion].correct) {
//       setIsCorrect(true);
//       setSelectedAnswer(answer);
//     } else {
//       setIsCorrect(false);
//       setSelectedAnswer(answer);
//     }
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestion + 1 < quizData.length) {
//       setCurrentQuestion(currentQuestion + 1);
//       setSelectedAnswer(null);
//       setIsCorrect(false);
//     } else {
//       setQuizCompleted(true);
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       {quizCompleted ? (
//         <h1>Quiz Completed!</h1>
//       ) : (
//         <div className="quiz-container">
//           <h2>{quizData[currentQuestion].question}</h2>
//           <div>
//             {quizData[currentQuestion].options.map((option) => (
//               <button  className='one' key={option} onClick={() => handleAnswerClick(option)} disabled={isCorrect}
//                 style={{
//                   backgroundColor:selectedAnswer === option
//                       ? isCorrect
//                         ? "green"
//                         : "red"
//                       : "", 
//                   color: "blue",
//                   margin: "5px",
//                   padding: "10px",
//                 }}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>
//           {selectedAnswer && (
//             <p style={{ color: isCorrect ? "green" : "red" }}>
//               {isCorrect ? "Correct!" : "Try Again"}
//             </p>
//           )}
//           {isCorrect && (
//             <button onClick={handleNextQuestion} className="next-button" style={{ marginTop: "20px" }}>
//               Next Question
//             </button>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default QuizApp;