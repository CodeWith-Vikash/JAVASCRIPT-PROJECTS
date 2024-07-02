// the questions data
let data = [
    {
      "serialNo": 1,
      "question": "What does HTML stand for?",
      "options": [
        "HyperText Markup Language",
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language",
        "Hyper Transfer Markup Language"
      ],
      "correctAnswer": "HyperText Markup Language"
    },
    {
      "serialNo": 2,
      "question": "Which HTML tag is used to define an internal style sheet?",
      "options": [
        "<style>",
        "<script>",
        "<css>",
        "<link>"
      ],
      "correctAnswer": "<style>"
    },
    {
      "serialNo": 3,
      "question": "Which property is used to change the background color in CSS?",
      "options": [
        "color",
        "background-color",
        "bgcolor",
        "background"
      ],
      "correctAnswer": "background-color"
    },
    {
      "serialNo": 4,
      "question": "What does CSS stand for?",
      "options": [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Colorful Style Sheets",
        "Computer Style Sheets"
      ],
      "correctAnswer": "Cascading Style Sheets"
    },
    {
      "serialNo": 5,
      "question": "Which JavaScript function is used to write HTML content to the browser?",
      "options": [
        "document.write()",
        "console.log()",
        "window.write()",
        "document.log()"
      ],
      "correctAnswer": "document.write()"
    },
    {
      "serialNo": 6,
      "question": "Which HTML attribute is used to define inline styles?",
      "options": [
        "style",
        "class",
        "styles",
        "font"
      ],
      "correctAnswer": "style"
    },
    {
      "serialNo": 7,
      "question": "How do you create a function in JavaScript?",
      "options": [
        "function:myFunction()",
        "function myFunction()",
        "function = myFunction()",
        "function => myFunction()"
      ],
      "correctAnswer": "function myFunction()"
    },
    {
      "serialNo": 8,
      "question": "Which CSS property controls the text size?",
      "options": [
        "text-size",
        "font-style",
        "text-style",
        "font-size"
      ],
      "correctAnswer": "font-size"
    },
    {
      "serialNo": 9,
      "question": "Which HTML element is used to specify a footer for a document or section?",
      "options": [
        "<footer>",
        "<section>",
        "<bottom>",
        "<foot>"
      ],
      "correctAnswer": "<footer>"
    },
    {
      "serialNo": 10,
      "question": "How do you add a comment in JavaScript?",
      "options": [
        "// This is a comment",
        "' This is a comment",
        "<!-- This is a comment -->",
        "/* This is a comment */"
      ],
      "correctAnswer": "// This is a comment"
    },
    {
      "serialNo": 11,
      "question": "Which JavaScript method is used to access an HTML element by its ID?",
      "options": [
        "getElementById()",
        "getElementByClass()",
        "getElementByName()",
        "getElementByTag()"
      ],
      "correctAnswer": "getElementById()"
    },
    {
      "serialNo": 12,
      "question": "What is the correct syntax for referring to an external script called 'script.js'?",
      "options": [
        "<script src='script.js'>",
        "<script href='script.js'>",
        "<script ref='script.js'>",
        "<script name='script.js'>"
      ],
      "correctAnswer": "<script src='script.js'>"
    },
    {
      "serialNo": 13,
      "question": "Which HTML tag is used to define a table?",
      "options": [
        "<table>",
        "<tab>",
        "<tr>",
        "<td>"
      ],
      "correctAnswer": "<table>"
    },
    {
      "serialNo": 14,
      "question": "Which CSS property is used to change the text color of an element?",
      "options": [
        "color",
        "font-color",
        "text-color",
        "font-style"
      ],
      "correctAnswer": "color"
    },
    {
      "serialNo": 15,
      "question": "What does DOM stand for in web development?",
      "options": [
        "Document Object Model",
        "Data Object Model",
        "Document Oriented Model",
        "Data Oriented Model"
      ],
      "correctAnswer": "Document Object Model"
    }
  ]
  
  // selectors
  const questionEL = document.querySelector('.question p')
  const questionNo = document.querySelector('.question b')
  const optionsEL = document.querySelector('.options')
  
  // showing the current question
  const currentQuest = data[0]
  const updateQuestion = () => {
    const {serialNo, question, options} = currentQuest
    questionEL.innerHTML = question
    questionNo.innerHTML = serialNo
    optionsEL.innerHTML = options.map(item => `<div class="option">${item}</div>`).join('')
  }
  updateQuestion()
  