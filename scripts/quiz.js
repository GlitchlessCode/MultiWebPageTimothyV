// Quiz Management Script by Timothy V

// -- Initialize Variables --

// - HTML Elements -

// Button
let correctionBtnEl = document.getElementById("checkAnswer");

// Inputs
let question1El = document.getElementById("question1");
let question2El = document.getElementById("question2");
let question3El = document.getElementById("question3");
let question4El = document.getElementById("question4");
let question5El = document.getElementById("question5");
let question6El = document.getElementById("question6");
let question7El = document.getElementById("question7");

// Outputs
let correctionField1El = document.getElementById("questionCorrection1");
let correctionField2El = document.getElementById("questionCorrection2");
let correctionField3El = document.getElementById("questionCorrection3");
let correctionField4El = document.getElementById("questionCorrection4");
let correctionField5El = document.getElementById("questionCorrection5");
let correctionField6El = document.getElementById("questionCorrection6");
let correctionField7El = document.getElementById("questionCorrection7");

let resultNumEl = document.getElementById("resultNum");
let resultPercentEl = document.getElementById("resultPercent");

let messageEl = document.getElementById("message");

// - Glbl Variables -

let correctNum = 0;


// -- Add Event Listeners --

correctionBtnEl.addEventListener("click", checkAnswers);


// -- Functions --

// - Event Functions -

function checkAnswers() {
    // Check if any answers are empty

    if (!correctionBtnEl.classList.contains("active")) {

        if (question1El.value !== "" && question2El.value !== "" && question3El.value !== "" && question4El.value !== "" && question5El.value !== "" && question6El.value !== "" && question7El.value !== "") {

            // Scroll to top, and remove red color potentially added by 'emptyAnswers()'
            messageEl.classList.remove("incorrect");
            window.scrollTo(0, 0);

            // Set button and fields
            correctionBtnEl.classList.add("active");

            question1El.disabled = true;
            question2El.disabled = true;
            question3El.disabled = true;
            question4El.disabled = true;
            question5El.disabled = true;
            question6El.disabled = true;
            question7El.disabled = true;

            // Check and Set Question 1
            if (question1El.value === "0") {
                // - Correct -

                // Classes
                correctionField1El.classList.add("correct");

                question1El.classList.add("correctBox");

                // HTML Content
                correctionField1El.innerHTML = "Correct";

                // Variables
                correctNum++;

            } else {
                // - Incorrect -

                // Classes
                correctionField1El.classList.add("incorrect");

                question1El.classList.add("incorrectBox");

                // HTML Content
                correctionField1El.innerHTML = "Incorrect";

            }

            // Check and Set Question 2
            if (question2El.value === "70000") {
                // - Correct -

                // Classes
                correctionField2El.classList.add("correct");

                question2El.classList.add("correctBox");

                // HTML Content
                correctionField2El.innerHTML = "Correct";

                // Variables
                correctNum++;

            } else {
                // - Incorrect -

                // Classes
                correctionField2El.classList.add("incorrect");

                question2El.classList.add("incorrectBox");

                // HTML Content
                correctionField2El.innerHTML = "Incorrect";

            }

            // Check and Set Question 3
            if (question3El.value.toLowerCase() === "singularity") {
                // - Correct -

                // Classes
                correctionField3El.classList.add("correct");

                question3El.classList.add("correctBox");

                // HTML Content
                correctionField3El.innerHTML = "Correct";

                // Variables
                correctNum++;

            } else {
                // - Incorrect -

                // Classes
                correctionField3El.classList.add("incorrect");

                question3El.classList.add("incorrectBox");

                // HTML Content
                correctionField3El.innerHTML = "Incorrect";

            }

            // Check and Set Question 4
            if (question4El.value.toLowerCase() === "ring singularity" || question4El.value.toLowerCase() === "ringularity") {
                // - Correct -

                // Classes
                correctionField4El.classList.add("correct");

                question4El.classList.add("correctBox");

                // HTML Content
                correctionField4El.innerHTML = "Correct";

                // Variables
                correctNum++;

            } else {
                // - Incorrect -

                // Classes
                correctionField4El.classList.add("incorrect");

                question4El.classList.add("incorrectBox");

                // HTML Content
                correctionField4El.innerHTML = "Incorrect";

            }

            // Check and Set Question 5
            if (question5El.value.toLowerCase() === "event horizon") {
                // - Correct -

                // Classes
                correctionField5El.classList.add("correct");

                question5El.classList.add("correctBox");

                // HTML Content
                correctionField5El.innerHTML = "Correct";

                // Variables
                correctNum++;

            } else {
                // - Incorrect -

                // Classes
                correctionField5El.classList.add("incorrect");

                question5El.classList.add("incorrectBox");

                // HTML Content
                correctionField5El.innerHTML = "Incorrect";

            }

            // Check and Set Question 6
            if (question6El.value.toLowerCase() === "ergosphere") {
                // - Correct -

                // Classes
                correctionField6El.classList.add("correct");

                question6El.classList.add("correctBox");

                // HTML Content
                correctionField6El.innerHTML = "Correct";

                // Variables
                correctNum++;

            } else {
                // - Incorrect -

                // Classes
                correctionField6El.classList.add("incorrect");

                question6El.classList.add("incorrectBox");

                // HTML Content
                correctionField6El.innerHTML = "Incorrect";

            }

            // Check and Set Question 7
            if (question7El.value.toLowerCase() === "hawking radiation") {
                // - Correct -

                // Classes
                correctionField7El.classList.add("correct");

                question7El.classList.add("correctBox");

                // HTML Content
                correctionField7El.innerHTML = "Correct";

                // Variables
                correctNum++;

            } else {
                // - Incorrect -

                // Classes
                correctionField7El.classList.add("incorrect");

                question7El.classList.add("incorrectBox");

                // HTML Content
                correctionField7El.innerHTML = "Incorrect";

            }

            // - Give Output -

            // Number & Percentage
            resultNumEl.innerHTML = correctNum;
            resultPercentEl.innerHTML = ((correctNum / 7) * 100).toFixed(2);

            // Add Color
            if ((correctNum / 7) * 100 > 50) {
                resultNumEl.classList.add("correct");
                resultPercentEl.classList.add("correct");

            } else {
                resultNumEl.classList.add("incorrect");
                resultPercentEl.classList.add("incorrect");

            }

            // Message
            if (correctNum <= 3) {
                // Below 50%
                messageEl.classList.add("incorrect");

                messageEl.innerHTML = "Better luck next time!";

            } else if (correctNum <= 6) {
                // Over 50%, but not perfect
                messageEl.classList.add("correct");

                messageEl.innerHTML = "Good job, but you can still do better!"

            } else {
                // Perfect Score
                messageEl.classList.add("correct");

                messageEl.innerHTML = "Very well done, you got a perfect score!";

            }

        } else {
            emptyAnswers();
        }
    }

}

// - Standard Functions -

function emptyAnswers() {
    messageEl.classList.add("incorrect");
    messageEl.innerHTML = "Please fill out the quiz";
}