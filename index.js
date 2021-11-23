// const QuizData = [
//   {
//     question: 'Who is bimasha?',
//     a: 'Engineer',
//     b: 'Doctor',
//     c: 'Pilot',

//     correct: 'a',
//   },

//   {
//     question: 'which programming language does she prefer?',
//     a: 'php',
//     b: 'python',
//     c: 'java',

//     correct: 'a',
//   },

//   {
//     question: 'Who is her bf?',
//     a: 'tanzid',
//     b: 'no one',
//     c: 'computer',

//     correct: 'c',
//   },

//   {
//     question: 'How much she earns?',
//     a: '20$',
//     b: '1000000$',
//     c: '6000$',

//     correct: 'b',
//   },

//   {
//     question: 'How many ex does she have?',
//     a: '0',
//     b: '1',
//     c: '5',

//     correct: 'c',
//   },

//   {
//     question: 'What bimasha like the most',
//     a: 'money',
//     b: 'honey',
//     c: 'bunny',

//     correct: 'b',
//   },

//   {
//     question: 'What bimasha a good student',
//     a: 'yes',
//     b: 'no',
//     c: 'average',

//     correct: 'a',
//   },

//   {
//     question: 'how many job title does she have?',
//     a: '1',
//     b: '2',
//     c: '3',

//     correct: 'c',
//   },

//   {
//     question: 'Bimasha ever broken?',
//     a: 'yes',
//     b: 'no',
//     c: 'a lot',

//     correct: 'b',
//   },

//   {
//     question: 'why bimasha cry somtimes',
//     a: 'for result',
//     b: 'for money',
//     c: 'for love',

//     correct: 'b',
//   },
// ]

// const answerEl = document.querySelectorAll('answer')
// const quiz = document.getElementById('quiz')
// const questionEl = document.getElementById('question')
// const answerEls = document.querySelectorAll('answer')

// const a_text = document.getElementById('a_text')
// const b_text = document.getElementById('b_text')
// const c_text = document.getElementById('c_text')

// const submitBtn = document.getElementById('submit')

// let currentQuiz = 0
// let score = 0

// loadQuiz()

// function loadQuiz() {
//   deselectAnswers()

//   const currentQuizData = QuizData[currentQuiz]
//   questionEl.innerHTML = currentQuizData.question

//   a_text.innerText = currentQuizData.a
//   b_text.innerText = currentQuizData.b
//   c_text.innerText = currentQuizData.c
// }

// function getSelected() {
//   let answer = undefined

//   answerEls.forEach((answerEl) => {
//     if (answerEl.checked) {
//       answer = answerEl.id
//     }
//   })

//   return answer
// }

// function deselectAnswers() {
//   answerEls.forEach((answerEl) => {
//     answerEl.checked = false
//   })
// }

// submitBtn.addEventListener('click', () => {
//   //check answer
//   const answer = getSelected()

//   if (answer) {
//     if (answer === QuizData[currentQuiz].correct) {
//       score++
//     }

//     currentQuiz++

//     if (currentQuiz < QuizData.length) {
//       loadQuiz()
//     } else {
//       quiz.innerHTML = '<h2> your score ${{score}}</h2>'
//     }
//   }

//   //   getSelected()
// })

const quizData = [
  {
    question: 'What is the most used programming language in 2019?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'Who is the President of US?',
    a: 'Florin Pop',
    b: 'Donald Trump',
    c: 'Ivan Saldano',
    d: 'Mihai Andrei',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function getSelected() {
  let answer = undefined

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })

  return answer
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false
  })
}

submitBtn.addEventListener('click', () => {
  // check to see the answer
  const answer = getSelected()

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++
    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `
    }
  }
})
