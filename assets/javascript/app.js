//the code below works, but it's not very efficient.
//I am commenting out all of the first attempt and trying to make it more streamlined. if I cannot get the streamlined version to work,  
//I will simply comment out the streamlined attempt and uncomment this working version.
//note** this first iteration only has three questions. for our purposes, having a working game matters more than the content. if 
//I were to do the entire code below I'd make 7 more question variables with the relevant properties and the script would run through them.


// var isAnswerScreen = false;
// var gameStart = false;
// $("#start-screen").on("click", function () {
//     if (gameStart == false) {
//         gameStart = true;
//         correctGuesses = 0;
//         incorrectGuesses = 0;
//         nextQuestion();
//         $("#start-screen").css('display', 'none');
//     }
// })
// var question1 = {
//     question: "what happened to timothy leary's ashes?", correctAnswer: "they were scattered in space.", wrongAnswer1: "they were scattered off the cliffs of dover", wrongAnswer2: "They were baked into a psychedelic brownie nicknamed spacebase-race", wrongAnswer3: "He was buried, not cremated.", nextQuestion: function () { changeQuestion(); }
// }

// var question2 = {
//     question: "what is the name of cheese", correctAnswer: "cheese", wrongAnswer1: "beef-jerky", wrongAnswer2: "apples", wrongAnswer3: "the cheese is a lie", nextQuestion: function () { changeQuestion(); }
// }

// var question3 = {
//     question: "this is question 3", correctAnswer: "this is correct answer question 3", wrongAnswer1: "wrong answer 1 for question 3", wrongAnswer2: "wrong answer 2 for question 3", wrongAnswer3: "wrong answer 3 for question 3", nextQuestion: function () { changeQuestion(); }
// }
// var questionBank = [question1, question2, question3]
// var correctGuesses = 0;
// var incorrectGuesses = 0;
// var timeLeft = 6;
// var userChoice = false;
// var questionNumber = -1;
// var answerTimeLeft = 4;
// var timerId = 1;
// var answerTimerId = 1;
// var choice1 = "";
// var choice2 = "";
// var choice3 = "";
// var choice4 = "";
// var choices = [choice1, choice2, choice3, choice4];
// var answerBank = [];


// function timer() {
//     timeLeft--;
//     $(".time-left").text(timeLeft + " seconds remaining.");
//     if (timeLeft == 0) {
//         incorrectGuesses++;
//         answerTimerId = setInterval(answerScreen, 1000);
//         console.log(timeLeft, answerTimeLeft)
//     }

// }


// function nextQuestion() {
//     isAnswerScreen = false;
//     clearInterval(answerTimerId);
//     questionNumber++;

//     if (questionNumber < (questionBank.length)) {
//         var answerPlaceHolders = [$(".answer1"), $(".answer2"), $(".answer3"), $(".answer4")];
//         answerTimeLeft = 8;
//         answerBank = [questionBank[questionNumber].correctAnswer, questionBank[questionNumber].wrongAnswer1, questionBank[questionNumber].wrongAnswer2, questionBank[questionNumber].wrongAnswer3];
//         var randNum = [0, 1, 2, 3];
//         var tempId = 0;;

//          choices = [choice1, choice2, choice3, choice4];
//         for (var i = 0; i < 4; i++) {

//             tempId = Math.floor(Math.random() *randNum.length );
//             choices[i] = answerBank[tempId];
//             randNum.splice(tempId, 1);
//             answerBank.splice(tempId, 1);
//             answerPlaceHolders[0].text( choices[i]);
//             answerPlaceHolders.splice(0, 1);
//             console.log(randNum, i, tempId, answerBank), choices[i];

//         }

//         $(".question").text(questionBank[questionNumber].question);
//         // $(".answer1").text(questionBank[questionNumber].correctAnswer);
//         // choice1 = questionBank[questionNumber].correctAnswer;
//         // $(".answer2").text(questionBank[questionNumber].wrongAnswer1);
//         // $(".answer3").text(questionBank[questionNumber].wrongAnswer2);
//         // $(".answer4").text(questionBank[questionNumber].wrongAnswer3);
//         timerId = setInterval(timer, 1000)
//     }
//     else if (questionNumber >= questionBank.length) {
//         quizEnd();
//     }
// }

// function answerScreen() {
//     isAnswerScreen = true;
//     if (answerTimeLeft == 0) {
//         console.log(timeLeft, answerTimeLeft)
//         nextQuestion();
//     } else {
//         clearInterval(timerId);
//         timeLeft = 6;
//         $(".time-left").text(answerTimeLeft);
//         answerTimeLeft--;
//         $(".question").text("The correct answer was...");
//         $(".answer1").text(questionBank[questionNumber].correctAnswer);
//         $(".answer2").text("");
//         $(".answer3").text("");
//         $(".answer4").text("");
//     }
// }

// $('.answer1').on("click", function () {

//     if (gameStart == true && isAnswerScreen == false) {
//         isAnswerScreen = true;
//         if (choices[0] == questionBank[questionNumber].correctAnswer) {
//             correctGuesses++;
//             answerTimerId = setInterval(answerScreen, 1000);
//         } else {
//             incorrectGuesses++;
//             answerTimerId = setInterval(answerScreen, 1000);
//         }

//     }
// })
// $('.answer2').on("click", function () {
//     if (gameStart == true && isAnswerScreen == false) {
//         isAnswerScreen = true;
//         if (choices[1] == questionBank[questionNumber].correctAnswer) {
//             correctGuesses++;
//             answerTimerId = setInterval(answerScreen, 1000);
//         } else {
//             incorrectGuesses++;
//             answerTimerId = setInterval(answerScreen, 1000);
//         }

//     }
// })
// $('.answer3').on("click", function () {
//     if (gameStart == true && isAnswerScreen == false) {
//         isAnswerScreen = true;
//         if (choices[2] == questionBank[questionNumber].correctAnswer) {
//             correctGuesses++;
//             answerTimerId = setInterval(answerScreen, 1000);
//         } else {
//             incorrectGuesses++;
//             answerTimerId = setInterval(answerScreen, 1000);
//         }

//     }
// })
// $('.answer4').on("click", function () {
//     if (gameStart == true && isAnswerScreen == false) {
//         isAnswerScreen = true;
//         if (choices[3] == questionBank[questionNumber].correctAnswer) {
//             correctGuesses++;
//             answerTimerId = setInterval(answerScreen, 1000);
//         } else {
//             incorrectGuesses++;
//             answerTimerId = setInterval(answerScreen, 1000);
//         }

//     }
// })
// function quizEnd() {
//     console.log("quiz end is running");
//     $('.question').text("Time's up! You answered" + correctGuesses + " questions correctly and " + incorrectGuesses + "incorrectly. Try again?");
//     $("#start-screen").css('display', 'inline-block');
//     gameStart = false;
//     timeLeft = 6;
//     userChoice = false;
//     questionNumber = -1;
//     answerTimeLeft = 4;
//     timerId = 1;
//     answerTimerId = 1;
//     isAnswerScreen = false;

// }





//starting new code attempt here:
$(document).ready(function () {

    //the below array will hold all of the question objects to cycle through
    let questions = [];

    //this is the question template, I may add additional functions to the template for practice
    const question = function (triviaQuestion, correctAnswer, wrongAnswer1, wrongAnswer2, wrongAnswer3) {
        this.triviaQuestion = triviaQuestion;
        this.correctAnswer = correctAnswer;
        this.wrongAnswer1 = wrongAnswer1;
        this.wrongAnswer2 = wrongAnswer2;
        this.wrongAnswer3 = wrongAnswer3;

        //the populate function places the question onto the screen and randomizes the answer options that are displayed on the screen.
        this.populate = function () {
            $('.question').text(this.triviaQuestion);
            choice1 = "";
            choice2 = "";
            choice3 = "";
            choice4 = "";
            choices = [choice1, choice2, choice3, choice4];
            var answerPlaceHolders = [$(".answer1"), $(".answer2"), $(".answer3"), $(".answer4")];
            var answerBank = [this.correctAnswer, this.wrongAnswer1, this.wrongAnswer2, this.wrongAnswer3];
            var randNum = [0, 1, 2, 3];
            var tempId = 0;
            for (var i = 0; i < 4; i++) {
                tempId = Math.floor(Math.random() * randNum.length);
                choices[i] = answerBank[tempId];
                randNum.splice(tempId, 1);
                answerBank.splice(tempId, 1);
                answerPlaceHolders[0].text(choices[i]);
                answerPlaceHolders.splice(0, 1);
            }
            //the populate function will also start the timer after propogating the answer choices. By running timer immediately, the user
            //will see the time left immediately rather than after a one second delay. the user may see a split second where the time goes from 
            //10 to 9 or whatever, I will try and think of a way to clear up the messy looking start after the rest of the script works.
            timer();
            gifGenerator();
            timerId = setInterval(timer, 1000);
        }
    }

    //creating the questions by passing their inputs into the questions template.
    //I wonder if there's a way to streamline this more, such as running a for loop to push the questions? the syntax eludes me
    var question1 = new question("Who is just the worst in Star Wars?", "Jar Jar Binks", "Darth Vader", "Money", "Emperor Palpatine");
    questions.push(question1);
    var question2 = new question("What happened to Timothy Leary's ashes?", "They were launched into space on a rocket.", "They were baked into brownies nicknamed 'space-base", "He was buried, not cremated.", "Who's Timothy Leary?");
    questions.push(question2);
    var question3 = new question("who is awesome?", "anyone who is not the icecream man", "you", "the icecream man", "me");
    questions.push(question3);
    var question4 = new question("What is a parsec?", "a unit of distance equal to 3.26 light-years.", "a type of fruit", "the distance light travels in a second", "what the icecream man tries to sell to unsuspecting children");
    questions.push(question4);
    var question5 = new question("Who coined the term 'string theory'?", "Gabriele Veneziano", "Einstein", "Alred Wauss", "Pedro Flores");
    questions.push(question5);
    var question6 = new question("Which of the following problems have remained unsolved in modern physics?", "The Three body problem", "Kepler's fourth law", "the icecream man", "Okham's dilemma");
    questions.push(question6);
    var question7 = new question("is light a particle, or a wave?", "light can be both particle and wave.", "particle only", "wave, only", "neither particle, nor wave, but icecream man");
    questions.push(question7);
    var question8 = new question("Which of the following bands does NOT have a concept album about animals from space flying through the multiverse?", "Archspire", "Wurmed", "Slugdge", "Gojira");
    questions.push(question8);
    var question9 = new question("How long can humans survive in a vacuum?", "90 seconds if you don't hold your breath before losing consciousness", "twenty seconds, then your blood boils away", "five minutes or so, because princess leia did it in the last jedi.", "about two minutes, as long as you hold your breath");
    questions.push(question9);
    var question10 = new question("Which of the following animals can survive in the vacuum of space for over 12 hours?", "Water Bears", "Squirrels", "starfish", "jellyfish");
    questions.push(question10);

    //globally declaring some variables to be changed/accessed within functions.
    var choice1 = "";
    var choice2 = "";
    var choice3 = "";
    var choice4 = "";
    var choices = [choice1, choice2, choice3, choice4];
    var gameStart = false;
    var timerId = "";
    var answerTimerId = "";
    var isAnswerScreen = false;
    var timeLeft = 11;
    var incorrectGuesses = 0;
    var correctGuesses = 0;
    var questionNumber = 0;
    var answerPlaceHolders = [$(".answer1"), $(".answer2"), $(".answer3"), $(".answer4")];
    var gifCount = 0;

    //timer function
    function timer() {

        timeLeft--;
        $(".time-left").text(timeLeft + " seconds remaining.");
        if (timeLeft == 0) {
            $('.answer2').text("Think faster!");
            incorrectGuesses++;
            clearInterval(timerId);
            timeLeft = 7;

            //again by immediately running answer screen, the user will see the time reset but may notice the time shifting from 7-6. still thinking of a workaround for the shift.
            answerScreen();
            answerTimerId = setInterval(answerScreen, 1000);
        }
    }
    // answer screen function. the isanswerscreen variable merely exists to stop the user from being able to cause on click events during answer screen.
    function answerScreen() {
        isAnswerScreen = true;
        timeLeft--;
        $(".time-left").text(timeLeft + " seconds until next question");
        $(".question").text("The correct answer was...");
        $(".answer1").text(questions[questionNumber].correctAnswer);
        $(".answer3").text("");
        $(".answer4").text("");

        //when the answer screen ends, it checks to see if it has run through all the questions. if it has, it runs the quizend function. 
        //if it hasn't, it calls the populate function on the next question in the list.
        if (timeLeft == 0) {
            clearInterval(answerTimerId);
            timeLeft = 11;
            questionNumber++;
            isAnswerScreen = false;
            if (questionNumber == questions.length) {
                quizEnd();

            } else {
                questions[questionNumber].populate();
            }
        }
    }

    // end of quiz function
    function quizEnd() {
        console.log("quiz end is running");
        $('.question').text("Time's up! You answered " + correctGuesses + " questions correctly and " + incorrectGuesses + " incorrectly. Try again?");
        $("#start-screen").css('display', 'inline-block');
        $('.answer1').text("");
        $('.answer2').text("");
        gameStart = false;
        questionNumber = 0;
        timerId = 1;
        answerTimerId = 1;
    }

    //gamestart function. note that you can only start the quiz once. any target could be used here, rather than start screen.
    //for example, I could put an on keypress event, or an onclick event for a start button rather than the whole document.
    $(document).on("click", function () {
        if (gameStart == false) {
            $("#start-screen").css('display', 'none');
            gameStart = true;
            correctGuesses = 0;
            incorrectGuesses = 0;
            questions[0].populate();

        }
    })

    //creating all of the on click events for answer options. 
    for (let i = 0; i < 4; i++) {
        answerPlaceHolders[i].on("click", function () {

            if (gameStart == true && isAnswerScreen == false) {
                timeLeft = 7;
                clearInterval(timerId);
                if (choices[i] == questions[questionNumber].correctAnswer) {
                    correctGuesses++;
                    $('.answer2').text("Good job!")
                } else {
                    incorrectGuesses++;
                    $('.answer2').text("Better luck next time.")
                }
                answerScreen();
                answerTimerId = setInterval(answerScreen, 1000);

            }
        })
    }

    //playing around with pulling gifs from apis, this will generate a random space gif underneath the trivia game at every new question.
    //I've limited it to running 42 times because after that giphy says I've used it too much. if the script tries to execute and 
    // cannot pull a gif, then this would crash the program. it would be cool if I could set some sort of variable external to the script entirely for this, so that if people reset the page, it would still remain at the proper count to prevent crashes from repeated plays/refreshes.
    function gifGenerator() {
        gifCount++;
        if (gifCount < 42) {
            var queryURL = "https://api.giphy.com/v1/gifs/random?apikey=ZyUXN606XVdEZHZ5sk3RWjOKSzOOFOyk&tag=space";
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                // alternatively I could have pre-created the element in html and styled it, then just changed the src url, but I wanted to make a new element to practice for next week's homework.

                var newGif = document.createElement("img");
                newGif.src = response.data.images.original.url;
                newGif.style.width = "200px";
                newGif.style.height = "auto";
                $(".gif-holder").html(newGif);
            });
        }
    }

})

// api key for this project: ZyUXN606XVdEZHZ5sk3RWjOKSzOOFOyk