/* ===================== QUESTION DATA ===================== */

const quizData = [
  /* -------- WEB DEVELOPMENT -------- */

  // EASY
  {
    category: "web",
    level: "easy",
    q: "Which language runs in a web browser?",
    o: ["Java", "C", "Python", "JavaScript"],
    a: 3,
  },
  {
    category: "web",
    level: "easy",
    q: "HTML stands for?",
    o: [
      "Hyper Text Markup Language",
      "High Tool ML",
      "Hyperlinks",
      "Home Tool Markup",
    ],
    a: 0,
  },
  {
    category: "web",
    level: "easy",
    q: "Which tag is used to create a hyperlink?",
    o: ["<a>", "<p>", "<div>", "<link>"],
    a: 0,
  },
  {
    category: "web",
    level: "easy",
    q: "Which tag creates an unordered list?",
    o: ["<ul>", "<ol>", "<li>", "<list>"],
    a: 0,
  },
  {
    category: "web",
    level: "easy",
    q: "CSS is mainly used for?",
    o: ["Logic", "Styling", "Database", "Server"],
    a: 1,
  },

  // MEDIUM
  {
    category: "web",
    level: "medium",
    q: "Which is NOT a JavaScript framework?",
    o: ["React", "Angular", "Vue", "Django"],
    a: 3,
  },
  {
    category: "web",
    level: "medium",
    q: "Which CSS property changes text color?",
    o: ["font", "background", "color", "style"],
    a: 2,
  },
  {
    category: "web",
    level: "medium",
    q: "Which HTML attribute is used for inline styles?",
    o: ["class", "style", "font", "css"],
    a: 1,
  },
  {
    category: "web",
    level: "medium",
    q: "Which HTTP method is used to send data?",
    o: ["GET", "FETCH", "POST", "PUSH"],
    a: 2,
  },
  {
    category: "web",
    level: "medium",
    q: "JavaScript is a ___ language.",
    o: ["Compiled", "Markup", "Interpreted", "Assembly"],
    a: 2,
  },

  // HARD
  {
    category: "web",
    level: "hard",
    q: "DOM stands for?",
    o: [
      "Data Object Model",
      "Document Object Model",
      "Design Object Model",
      "Document Oriented Model",
    ],
    a: 1,
  },
  {
    category: "web",
    level: "hard",
    q: "Which event occurs when a user clicks an element?",
    o: ["onchange", "onmouseover", "onclick", "onsubmit"],
    a: 2,
  },
  {
    category: "web",
    level: "hard",
    q: "Which keyword declares a constant in JS?",
    o: ["var", "let", "const", "static"],
    a: 2,
  },
  {
    category: "web",
    level: "hard",
    q: "Which method converts JSON to JS object?",
    o: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.toObject()",
    ],
    a: 0,
  },

  /* -------- SOFTWARE TESTING -------- */

  // EASY
  {
    category: "testing",
    level: "easy",
    q: "Selenium is mainly used for?",
    o: ["Development", "Automation Testing", "Design", "Database"],
    a: 1,
  },
  {
    category: "testing",
    level: "easy",
    q: "Which company developed Selenium?",
    o: ["Google", "Microsoft", "ThoughtWorks", "Amazon"],
    a: 2,
  },
  {
    category: "testing",
    level: "easy",
    q: "Manual testing is performed by?",
    o: ["Tools", "Scripts", "Humans", "Servers"],
    a: 2,
  },
  {
    category: "testing",
    level: "easy",
    q: "Which testing checks basic functionality?",
    o: ["Smoke", "Load", "Security", "Stress"],
    a: 0,
  },
  {
    category: "testing",
    level: "easy",
    q: "Which testing is done without executing code?",
    o: ["Dynamic", "Unit", "Static", "Regression"],
    a: 2,
  },

  // MEDIUM
  {
    category: "testing",
    level: "medium",
    q: "Which tool is used for performance testing?",
    o: ["JUnit", "Postman", "JMeter", "Selenium"],
    a: 2,
  },
  {
    category: "testing",
    level: "medium",
    q: "Black box testing focuses on?",
    o: ["Code", "UI & behavior", "Internal logic", "Database"],
    a: 1,
  },
  {
    category: "testing",
    level: "medium",
    q: "Regression testing ensures?",
    o: ["New features", "Old features still work", "Performance", "Security"],
    a: 1,
  },
  {
    category: "testing",
    level: "medium",
    q: "Which testing is done after integration?",
    o: ["Unit", "System", "Smoke", "Alpha"],
    a: 1,
  },
  {
    category: "testing",
    level: "medium",
    q: "Test cases are derived from?",
    o: ["Source code", "Requirements", "Database", "Tools"],
    a: 1,
  },

  // HARD
  {
    category: "testing",
    level: "hard",
    q: "Which testing is performed first?",
    o: ["Integration", "System", "Unit", "Acceptance"],
    a: 2,
  },
  {
    category: "testing",
    level: "hard",
    q: "What is STLC?",
    o: [
      "Software Test Life Cycle",
      "System Test Logic Cycle",
      "Software Tool Life Cycle",
      "System Tool Logic Cycle",
    ],
    a: 0,
  },
  {
    category: "testing",
    level: "hard",
    q: "Which testing validates non-functional requirements?",
    o: ["Unit", "Functional", "Performance", "Integration"],
    a: 2,
  },
  {
    category: "testing",
    level: "hard",
    q: "What is test coverage?",
    o: ["Lines executed", "Requirements tested", "Code quality", "Bug count"],
    a: 1,
  },
];

/* ===================== QUIZ LOGIC ===================== */

let questions = [];
let index = 0;
let answers = [];
let timeSpent = [];
let timer;
let timeLeft = 15;
let startTime;

function startQuiz() {
  const category = document.getElementById("category").value;
  const difficulty = document.getElementById("difficulty").value;

  questions = quizData.filter(
    (q) => q.category === category && q.level === difficulty,
  );

  index = 0;
  answers = new Array(questions.length).fill(null);
  timeSpent = new Array(questions.length).fill(0);

  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");

  loadQuestion();
}

function loadQuestion() {
  clearInterval(timer);

  timeLeft = 15;
  document.getElementById("time").innerText = timeLeft;
  document.getElementById("qno").innerText =
    `Question ${index + 1} / ${questions.length}`;
  document.getElementById("question").innerText = questions[index].q;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  questions[index].o.forEach((opt, i) => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = opt;

    if (answers[index] === i) div.classList.add("selected");

    div.onclick = () => {
      answers[index] = i;
      document
        .querySelectorAll(".option")
        .forEach((o) => o.classList.remove("selected"));
      div.classList.add("selected");
    };

    optionsDiv.appendChild(div);
  });

  startTime = Date.now();
  startTimer();
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").innerText = timeLeft;

    if (timeLeft === 0) {
      nextQuestion();
    }
  }, 1000);
}

function nextQuestion() {
  clearInterval(timer);
  timeSpent[index] = Math.floor((Date.now() - startTime) / 1000);

  if (index < questions.length - 1) {
    index++;
    loadQuestion();
  } else {
    showResult();
  }
}

function prevQuestion() {
  if (index > 0) {
    index--;
    loadQuestion();
  }
}

function showResult() {
  document.getElementById("quiz-box").classList.add("hidden");
  document.getElementById("result-box").classList.remove("hidden");

  let correct = 0;
  questions.forEach((q, i) => {
    if (answers[i] === q.a) correct++;
  });

  document.getElementById("total").innerText = questions.length;
  document.getElementById("correct").innerText = correct;
  document.getElementById("wrong").innerText = questions.length - correct;

  new Chart(document.getElementById("resultChart"), {
    type: "pie",
    data: {
      labels: ["Correct", "Wrong"],
      datasets: [
        {
          data: [correct, questions.length - correct],
          backgroundColor: ["#38b000", "#d00000"],
        },
      ],
    },
  });
}
