const submitButton = document.getElementById("submit");
const refreshButton = document.getElementById("refresh");
const form = document.getElementById("quizForm");
const resultText = document.getElementById("result");

const correctAnswers= {
  q1: "Gold",
  q2: "Mauna Kea",
  q3: "Vincent van Gogh",
  q4: "Japan",
  q5: "1912",
  q6: "Poseidon",
  q7: "Saturn",
  q8: "Skin",
  q9: "Don Quixote",
  q10: "Vatican City"
}

submitButton.addEventListener("click", () => {
  const userAnswers = {
    q1: form.q1.value,
    q2: form.q2.value,
    q3: form.q3.value,
    q4: form.q4.value,
    q5: form.q5.value,
    q6: form.q6.value,
    q7: form.q7.value,
    q8: form.q8.value,
    q9: form.q9.value,
    q10: form.q10.value
  }
  let score = 0;
  for (const question in correctAnswers) {
    const selectedOption = document.querySelector(`input[name=${question}]:checked`);
    if (selectedOption) {
      if (userAnswers[question] === correctAnswers[question]) {
        score++;
        selectedOption.parentElement.style.background = "#A5FD82";
      }
      else {
        selectedOption.parentElement.style.background = "#FD8282";
      }
    }
  }
  resultText.textContent = `You scored ${score} out of ${Object.keys(correctAnswers).length}.`;
  resultText.scrollIntoView({behavior: "smooth"});
  console.log("Score: ", score);
  refreshButton.style.display = "inline";
  submitButton.disabled = true;
})

refreshButton.addEventListener("click", () => {
  form.reset();
  resultText.textContent = ``;
  const labels = document.querySelectorAll("label");
  labels.forEach((label) => {
    label.style.background = "none";
  })
  refreshButton.style.display = "none";
  submitButton.disabled = false;
  document.getElementById("title").scrollIntoView({behavior: "smooth"});
})