//Question and answer objects
var questions = {
    q1: ["How many championships have the Los Angeles Lakers won?"],
    q2: ["What exact date did the very first Xbox gaming console release on?"],
    q3: ["Adidas flagship running shoes, the Ultraboost, are made to made to last how many miles?"],
    q4: ["The very first Air Jordan brand shoes were banned from the NBA"],
    q5: ["The pitbul breed is a very dangerous breed"]
};

var answers = {
    answerOne: {
        1: "18",
        2: "16", // correct answer
        3: "15,"
    },
    answerTwo: {
        1: "November 15, 2001", // correct answer 
        2: "November 11, 2003",
        3: "November 17, 2002"
    },
    answerThree: {
        1: "2000 miles",
        2: "1700 miles",
        3: "1500 miles" // correct answer
    },
    answerFour: {
        1: "True", //correct answer
        2: "False"
    },
    answerFive: {
        1: "True",
        2: "False" //correct answer
    }
}

//More variables 
var isCorrect = false;
var wrongCount = 0;
var answerCount = 0;
var time = 30;
var questionCount = 0;
var interval;

function startGame() {
    $(".startBtn").on("click", function()
    {
        $(".startBtn").hide();
        timeCount();
        quest1();
        chooseCheckAnswer();
        });
}
function timeCount(){
    time = 20;
    interval = setInterval(timeRemaining, 1000);
    console.log(timeCount());
}
function timeRemaining(){
    time--; 
    $(".timerCountDown").text(time + " seconds");
    if (time === 0)
    {
        clearInterval(interval);
        $("button").remove();
        $(".questionInput").remove();
        $(".btnContainer").append("<div class = 'timeIsUp'> Time is up </div>");
        displayAnswer();
    }
}
function displayAnswer(){
    if(questionCount === 1 && isCorrect === false)
    {
        wrongCount++;
        var newDiv = $("<div class= 'correctAnswer'>");
        correctAnswer = newDiv.text("BOO! Wrong answer!");
        $('.btnContainer').append(correctAnswer);
        setTimeout (function()
    {
    });
    }
}
