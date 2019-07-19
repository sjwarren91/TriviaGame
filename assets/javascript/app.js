var x = (window.innerWidth * 0.4 - 60)/6;
var y = ($(".container").height()/ 4) + 6;
var x1 = ((window.innerWidth * 0.4 - 60)/12);
var y1 = ($(".container").height()/8) + 6;
var width = $(".container").width() +28;
var height = $(".container").height()+28;

var bigLedArray = [
    {top: "4px", left: x + "px", class: "bled"},
    {top: "4px", left: 2*x + "px", class: "bled"},
    {top: "4px", left: 3*x + "px", class: "bled"},
    {top: "4px", left: 4*x + "px", class: "bled"},
    {top: "4px", left: 5*x + "px", class: "bled"},
    {top: "4px", left: 6*x + "px", class: "bled"},
    {top: height + "px", left: x + "px", class: "bled"},
    {top: height + "px", left: 2*x + "px", class: "bled"},
    {top: height + "px", left: 3*x + "px", class: "bled"},
    {top: height + "px", left: 4*x + "px", class: "bled"},
    {top: height + "px", left: 5*x + "px", class: "bled"},
    {top: height + "px", left: 6*x + "px", class: "bled"},
    {top: "8px", left: "4px", class: "bled"},
    {top: height + "px", left: "4px", class: "bled"},
    {top: y + "px", left: "4px", class: "bled"},
    {top: 2*y + "px", left: "4px", class: "bled"},
    {top: 3*y + "px", left: "4px", class: "bled"},
    {top: y + "px", left: width + "px", class: "bled"},
    {top: 2*y + "px", left: width + "px", class: "bled"},
    {top: 3*y + "px", left: width + "px", class: "bled"},
    {top: "8px", left: width + "px", class: "bled"},
    {top: height + "px", left: width + "px", class: "bled"},
    {top: "8px", left: x1 + "px", class: "lLed"},
    {top: "8px", left: 3*x1+4 + "px", class: "lLed"},
    {top: "8px", left: 5*x1+4 + "px", class: "lLed"},
    {top: "8px", left: 7*x1+4 + "px", class: "lLed"},
    {top: "8px", left: 9*x1+4 + "px", class: "lLed"},
    {top: "8px", left: 11*x1+4 + "px", class: "lLed"},
    {top: "8px", left: 13*x1+4 + "px", class: "lLed"},
    {top: height + 4 + "px", left: x1 + "px", class: "lLed"},
    {top: height + 4 + "px", left: 3*x1+4 + "px", class: "lLed"},
    {top: height + 4 + "px", left: 5*x1+4 + "px", class: "lLed"},
    {top: height + 4 + "px", left: 7*x1+4 + "px", class: "lLed"},
    {top: height + 4 + "px", left: 9*x1+4 + "px", class: "lLed"},
    {top: height + 4 + "px", left: 11*x1+4 + "px", class: "lLed"},
    {top: height + 4 + "px", left: 13*x1+4 + "px", class: "lLed"},
    {top: y1 + "px", left: "8px", class: "lLed"},
    {top: 3*y1 + "px", left: "8px", class: "lLed"},
    {top: 5*y1 + "px", left: "8px", class: "lLed"},
    {top: 7*y1 + "px", left: "8px", class: "lLed"},
    {top: y1 + "px", left: width + 4 +"px", class: "lLed"},
    {top: 3*y1 + "px", left: width + 4 +"px", class: "lLed"},
    {top: 5*y1 + "px", left: width + 4 +"px", class: "lLed"},
    {top: 7*y1 + "px", left: width + 4 +"px", class: "lLed"}
    
];

function bigLeds (){
    for(let i = 0; i < bigLedArray.length; i++){
        var led = document.createElement("div");
        led.className = bigLedArray[i].class;
        led.style.top = bigLedArray[i].top;
        led.style.left = bigLedArray[i].left;
        $(".border").prepend(led);
    }
}

var trivia = {
    right: 0,
    wrong: 0,
    missed: 0,
    currentQ: 0,
    timer: 0,
    clockRunning: "",
    answerChosen: false,

    questions: {
        q1: "What are Durin's Folk more commonly known as?",
        q2: "What kind of creatures are the spawn of Ungoliant?",
        q3: "Which of these is not a public inn in Middle Earth?"
    },

    choices: {
        q1: [
            "Hobbits from outside The Shire",
            "Dwarves",
            "Forest Elves",
            "Great Eagles"
        ],
        q2: ["Hill Giants", "Uruk-hai", "Giant Spiders", "Flying fell beasts"],
        q3: [
            "The Old Guesthouse",
            "The Green Dragon",
            "The Prancing Pony",
            "The Southern Star"
        ]
    },

    answers: {
        q1: "Dwarves",
        q2: "Giant Spiders",
        q3: "The Southern Star"
    },

    next: function() {
        //set timer to 0
        trivia.answerChosen = false;
        trivia.timer = 2;
        if (trivia.currentQ < 3) {
            $(".time").text(trivia.timer);
        }

        //start timer
        trivia.clockRunning = setInterval(trivia.clock, 1000);
        //display question and answers, get questions and answers from object
        var question = Object.values(trivia.questions)[trivia.currentQ];

        var options = Object.values(trivia.choices)[trivia.currentQ];

        //print question to question field
        $(".question").text(question);
        //print each option to option fields
        $.each(options, function(index, value) {
            $(".field" + index).text(value);
        });
    },

    clock: function() {
        //reaches 0 and nothing picked increment wrong
        //time greater than zero decrease timer
        //timer zero and questions remaining

        if (trivia.timer > 0 && trivia.currentQ < 3) {
            trivia.timer--;
            $(".time").text(trivia.timer);
        } else if (trivia.timer === 0) {
            if (trivia.answerChosen === false) {
                trivia.missed++;
            }
            trivia.currentQ++;
            trivia.next();
            clearInterval(trivia.clockRunning);
        } else {
            trivia.endGame();
        }
    },

    guess: function() {
        //check clicked value with answer
        trivia.answerChosen = true;
        var thisAnswer = trivia.answers[trivia.currentQ];
        //if wrong ++ wrong set answer chosen to true
        if (thisAnswer === $(this).text()) {
            trivia.right++;
            console.log(trivia.right);
            clearInterval(trivia.clockRunning);
        }
        //if right ++ right set answer chosen to true
        else {
            trivia.wrong++;
            console.log(trivia.wrong);
            clearInterval(trivia.clockRunning);
        }

        trivia.currentQ++;
        console.log(trivia.currentQ);
        if (trivia.currentQ > 2) {
            //call end game function
            trivia.endGame();
        } else {
            trivia.next();
        }
    },

    endGame: function() {
        clearInterval(trivia.clockRunning);
        $(".choice").off("click", trivia.guess);
        $(".question").text("Game Over!");
        $(".field0").text("Correct: " + trivia.right);
        $(".field1").text("Wrong: " + trivia.wrong);
        $(".field2").text("Missed: " + trivia.missed);
        $(".field3").text("");
        $(".time").empty();
    }
};

$(document).ready(function() {
    bigLeds();

    trivia.next();

    $(".choice").on("click", trivia.guess);
});

// function Trivia(question, answerRight, answer2, answer3, answer4){
//     this.question = question,
//     this.answerRight = answerRight,
//     this.answer2 = answer2,
//     this.answer3 = answer3,
//     this.answer4 = answer4
// }

// var first = new Trivia(
//     "The beaver is the national emblem of which country?",
//     "Canada",
//     "United States of America",
//     "Australia",
//     "Africa"
// )

// var second = new Trivia(
//     "Which TV character said, “Live long and prosper”?",
//     "Mr. Spock",
//     "Aragorn",
//     "Luke Skywalker",
//     "Superman"
// )

// var third = new Trivia(
//     "What is the name of Batman’s butler?",
//     "Alfred",
//     "Gordon",
//     "Robin",
//     "Bruce"
// )

// var questions = [first, second, third];
// var time = 0;

// function printQ(object){
//     var field = [".field1", ".field2", ".field3", ".field4"];
//     var answers = ["answerRight", "answer2", "answer3", "answer4"];

//     var index;
//     var x = 4;
//     $(".question").text(object.question);
//     for(let i = 0; i < 4; i++){
//         index = Math.floor(Math.random()*x);
//         console.log(index);
//         $(field[i]).text(object[answers[index]]);
//         answers.splice(index, 1);
//         x--;
//     }
// }

// function chooseQ(){
//     var index;
//     index = Math.floor(Math.random()*questions.length);
//     printQ(questions[index]);
//     questions.splice(index, 1);
// }

// function count(){
//     time++;
//     $(".time").text(time);
// }
