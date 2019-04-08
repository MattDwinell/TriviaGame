
var isAnswerScreen = false;
var gameStart = false;
$("#start-screen").on("click", function () {
    if ( gameStart ==false) {
        gameStart = true;
        correctGuesses = 0;
        incorrectGuesses = 0;
        nextQuestion();
        $("#start-screen").css('display', 'none');
    }
})
        var question1 = {
            question: "what happened to timothy leary's ashes?", correctAnswer: "they were scattered in space.", wrongAnswer1: "they were scattered off the cliffs of dover", wrongAnswer2: "They were baked into a psychedelic brownie nicknamed spacebase-race", wrongAnswer3: "He was buried, not cremated.", nextQuestion: function () { changeQuestion(); }
        }

        var question2 = {
            question: "what is the name of cheese", correctAnswer: "cheese", wrongAnswer1: "beef-jerky", wrongAnswer2: "apples", wrongAnswer3: "the cheese is a lie", nextQuestion: function () { changeQuestion(); }
        }

        var question3 = {
            question: "this is question 3", correctAnswer: "this is correct answer question 3", wrongAnswer1: "wrong answer 1 for question 3", wrongAnswer2: "wrong answer 2 for question 3", wrongAnswer3: "wrong answer 3 for question 3", nextQuestion: function () { changeQuestion(); }
        }
        var questionBank = [question1, question2, question3]
        var correctGuesses = 0;
        var incorrectGuesses = 0;
        var timeLeft = 6;
        var userChoice = false;
        var questionNumber = -1;
        var answerTimeLeft = 4;
        var timerId = 1;
        var answerTimerId = 1;
        var choice1 = "";
        var choice2 = "";
        var choice3 = "";
        var choice4 = "";


        function timer() {
            timeLeft--;
            $(".time-left").text(timeLeft + " seconds remaining.");
            if (timeLeft == 0 ) {
                incorrectGuesses ++;
                answerTimerId = setInterval(answerScreen, 1000);
                console.log(timeLeft, answerTimeLeft)
            }

        }


        function nextQuestion() {
            isAnswerScreen = false;
            clearInterval(answerTimerId);
            questionNumber++;
            console.log("made it to next question" + questionNumber);
            if (questionNumber < (questionBank.length)) {
                answerTimeLeft = 4;

                $(".question").text(questionBank[questionNumber].question);
                $(".answer1").text(questionBank[questionNumber].correctAnswer);
                choice1 = questionBank[questionNumber].correctAnswer;
                $(".answer2").text(questionBank[questionNumber].wrongAnswer1);
                $(".answer3").text(questionBank[questionNumber].wrongAnswer2);
                $(".answer4").text(questionBank[questionNumber].wrongAnswer3);
                timerId = setInterval(timer, 1000)
                console.log(timeLeft, answerTimeLeft)
            }
            else if (questionNumber >= questionBank.length) {
                quizEnd();
            }
        }

        function answerScreen() {
            isAnswerScreen = true;
            if (answerTimeLeft == 0) {
                console.log(timeLeft, answerTimeLeft)
                nextQuestion();
            } else {
                clearInterval(timerId);
                timeLeft = 6;
                $(".time-left").text(answerTimeLeft);
                answerTimeLeft--;
                $(".question").text("The correct answer was...");
                $(".answer1").text(questionBank[questionNumber].correctAnswer);
                $(".answer2").text("");
                $(".answer3").text("");
                $(".answer4").text("");
            }
        }

$('.answer1').on("click", function(){
 if (gameStart == true && isAnswerScreen == false){
     isAnswerScreen = true;
     if  (choice1 == questionBank[questionNumber].correctAnswer){
         correctGuesses ++;
         answerTimerId = setInterval(answerScreen, 1000);
     } else {
         incorrectGuesses ++;
         answerTimerId = setInterval(answerScreen, 1000);
     }

 }   
})
$('.answer2').on("click", function(){
    if (gameStart == true && isAnswerScreen == false){
        isAnswerScreen = true;
        if  (choice2 == questionBank[questionNumber].correctAnswer){
            correctGuesses ++;
            answerTimerId = setInterval(answerScreen, 1000);
        } else {
            incorrectGuesses ++;
            answerTimerId = setInterval(answerScreen, 1000);
        }
   
    }   
   })
   $('.answer3').on("click", function(){
    if (gameStart == true && isAnswerScreen == false){
        isAnswerScreen = true;
        if  (choice3 == questionBank[questionNumber].correctAnswer){
            correctGuesses ++;
            answerTimerId = setInterval(answerScreen, 1000);
        } else {
            incorrectGuesses ++;
            answerTimerId = setInterval(answerScreen, 1000);
        }
   
    }   
   })
   $('.answer4').on("click", function(){
    if (gameStart == true && isAnswerScreen == false){
        isAnswerScreen = true;
        if  (choice4 == questionBank[questionNumber].correctAnswer){
            correctGuesses ++;
            answerTimerId = setInterval(answerScreen, 1000);
        } else {
            incorrectGuesses ++;
            answerTimerId = setInterval(answerScreen, 1000);
        }
   
    }   
   })
        function quizEnd() {
            console.log("quiz end is running");
            $('.question').text("Time's up! You answered" + correctGuesses + " questions correctly and " + incorrectGuesses + "incorrectly. Try again?");
            $("#start-screen").css('display', 'inline-block');
            gameStart = false;
            timeLeft = 6;
            userChoice = false;
            questionNumber = -1;
            answerTimeLeft = 4;
            timerId = 1;
            answerTimerId = 1;
            isAnswerScreen = false;

        }
 