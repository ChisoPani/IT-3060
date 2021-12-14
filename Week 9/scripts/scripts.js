(function () {
  function createQuiz() {

    const output = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        const answers = [];

        for (letter in currentQuestion.answers) {

          answers.push(
            `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
          );
        }

        output.push(
          `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  }

  function showResults() {

    const storeAnswers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {

      const storeAnswer = storeAnswers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (storeAnswer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        storeAnswers[questionNumber].style.color = 'lightgreen';
      }
      else {
        storeAnswers[questionNumber].style.color = 'red';
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }


  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if (currentSlide === 0) {

    }
    else {

    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else {
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const checkButton = document.getElementById('check');


  function checkAnswer() {

    const storeAnswers = quizContainer.querySelectorAll('.answers');

    myQuestions.forEach((currentQuestion, questionNumber) => {

      const storeAnswer = storeAnswers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = storeAnswer.querySelector(selector).value;
      if (userAnswer == currentQuestion.correctAnswer) {
        storeAnswers[questionNumber].style.color = 'lightgreen';
      }
      else {
        storeAnswers[questionNumber].style.color = 'red';
      }
    });
  }

  createQuiz();

  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(currentSlide);

  submitButton.addEventListener('click', showResults);;
  nextButton.addEventListener("click", showNextSlide);
  checkButton.addEventListener("click", checkAnswer);
})();
