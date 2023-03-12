const quizData = [
    {
      question: "What is the capital of France?",
      a: "Paris",
      b: "London",
      c: "Berlin",
      d: "Madrid",
      correct: "a",
    },
    {
      question: "What is the largest mammal in the world?",
      a: "Elephant",
      b: "Whale",
      c: "Giraffe",
      d: "Hippopotamus",
      correct: "b",
    },
    {
      question: "What is the currency used in Japan?",
      a: "Dollar",
      b: "Pound",
      c: "Yen",
      d: "Euro",
      correct: "c",
    },
    {
      question: "What is the smallest country in the world?",
      a: "Vatican City",
      b: "Monaco",
      c: "Maldives",
      d: "San Marino",
      correct: "a",
    },
    {
        question: "What is the name of the lady in this class",
        a: "Johnson",
        b: "Array",
        c: "Stephen",
        d: "Kelechi",
        correct: "d",
      },
  ];


const quiz = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

const buildQuiz = () =>{
    // Variable will store the HTML output.
    const output = []

    // Run loop to get each question and index.
    quizData.forEach((currentQuestion, questionNumber)=>{

        // Variable to store the list of possible answers.
        const answers =[]

        // Run loop to get all the available answers...
        for (letter in currentQuestion){
            
            // ... add radio button
            if(letter !== "question" && letter !== "correct"){

                answers.push(
                    `
                        <label>
                            <input type="radio" name="question${questionNumber}" value=${letter}>
                            ${currentQuestion[letter]}
                        </label>
                    `
                )
            }

        }
        
        // Add this question and its answers to the output.
        output.push(
            `
                <div>
                    <h2>${currentQuestion.question}</h2>
                    <div class="answers">${answers.join("")}</div>
                </div>
            
            `
        )
        
    })

    quiz.innerHTML = output.join("")

}
buildQuiz()

  