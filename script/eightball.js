const questionLabel = document.getElementById("question-label");
const questionInput = document.getElementById("question-field");
const questionContainer = document.getElementById("question-container");
const question = document.createElement("p");

const button = document.getElementById("button");
const answerImage = document.getElementById("answer-image");

function generateRandom(min_number, max_number) {
    return Math.floor(Math.random() * (max_number - min_number +1) + min_number);
    //Math.round rounds to the closest number
}

button.addEventListener("click", () => {
    const randomNumber = generateRandom(1, 20);
    const imagePath = `../public/magic8ball_${randomNumber}.png`
    answerImage.src = imagePath;


    /*
    if (randomNumber == 0) {
        answerText = "Don't count on it...";
    }
    else if (randomNumber == 1) {
        answerText = "Unsure...";
    }
    else if (randomNumber == 2) {
        answerText = "Count on it";
    }
    else {
        answerText = "Definitely";
    }
    */

    /*
    if (answer.childElementCount === 0){
        answer.appendChild(answerImage);
    }
    */
   
    question.textContent = questionInput.value;
    questionContainer.appendChild(question);
});