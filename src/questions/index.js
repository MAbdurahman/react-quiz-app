/*===========================================
            questions/index.js
===========================================*/
const qBank = [
   {
      question: "How many states does the United States have?",
      answers: ["Thirteen", "Twenty-five", "Fifty", "Forty"],
      correct: "Fifty",
      questionId: 011011
   },
   {
      question: "Which of the following U. S. Presidents is not on Mount Rushmore?",
      answers: ["Theodore Roosevelt", "John F. Kennedy", "Abraham Lincoln", "Thomas Jefferson"],
      correct: "John F. Kennedy",
      questionId: 022022
   },
   {
      question: "What is the capital of the United States?",
      answers: ["New York", "Atlanta", "Chicago", "Washington, D. C."],
      correct: "Washington, D. C.",
      questionId: 033033
   },
   {
      question: "Which month of the Georgian Calendar does not have 30 days?",
      answers: ["February", "March", "April", "December"],
      correct: "February",
      questionId: 044044
   },
   {
      question: "Which is the largest and deepest ocean in the World?",
      answers: ["Pacific Ocean", "Atlantic Ocean", "Adriatic Sea", "Indian Ocean"],
      correct: "Pacific Ocean",
      questionId: 055055
   },
   {
      question: "What is the highest mountain in the World?",
      answers: ["Mount McKinley", "Smokey Mountain", "Mount Kilimanjaro", "Mount Everest"],
      correct: "Mount Everest",
      questionId: 066066
   },
   {
      question: "Which of the following is the largest country in the World?",
      answers: ["Texas", "Russia", "China", "Africa"],
      correct: "Russia",
      questionId: 077077
   },
   {
      question: "Who was the First President of the United States?",
      answers: ["Benjamin Franklin", "Franklin Roosevelt", "Thomas Jefferson", "George Washington"],
      correct: "George Washington",
      questionId: 088088
   },
   {
      question: "How many World Continents?",
      answers: ["Five", "Seven", "Eight", "Nine"],
      correct: "Seven",
      questionId: 099099
   },
   {
      question: "What is the World's largest continent?",
      answers: ["Africa", "Asia", "Australia", "Antarctica"],
      correct: "Asia",
      questionId: 100110
   }

];

export default (n = 5) =>
	Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));