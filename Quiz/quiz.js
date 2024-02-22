const quizData = [
    {
      question: "How old is Ayanokouji ?",
      a: "10",
      b: "17",
      c: "35",
      d: "18",
      correct: "d",
    },
    {
      question: "What is the most used programming language in 2019 ?",
      a: "java",
      b: "javascript",
      c: "c++",
      d: "python",
      correct: "b",
    },
    {
      question: "Who's the president of US ?",
      a: "Sachin",
      b: "Ayanokouji",
      c: "Arisu",
      d: "50",
      correct: "a",
    },
    {
      question: "What does HTML stands for ? ?",
      a: "Hypertext Markup Language",
      b: "Hyper transfer markup language",
      c: "Hypertext Mockup Language",
      d: "Hypertext main language",
      correct: "a",
    },
    {
      question: "What year was JS Launced?",
      a: "2000",
      b: "1985",
      c: "1996",
      d: "1995",
      correct: "d",
    },
  ];
  const answerEls = document.querySelectorAll(".answer");
  const questionEl = document.getElementById("question");
  const quiz = document.getElementById("quiz");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitbtn = document.getElementById("submit");
  let currentQuiz = 0;
  let score = 0;
  loadQuiz();
  function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }

  function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  function deselectAnswers() {
    answerEls.forEach((answerEl) => {
      answerEl.checked = false;
    });
  }

  submitbtn.addEventListener("click", () => {
    const answer = getSelected();
    console.log(answer);

    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
      currentQuiz++;
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} Questions</h2>
      <button onclick="location.reload()">Reload</button>`;
      }
    }
  });