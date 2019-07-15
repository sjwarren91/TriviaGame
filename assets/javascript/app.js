function Trivia(question, answerRight, answer2, answer3, answer4){
    this.question = question,
    this.answerRight = answerRight,
    this.answer2 = answer2,
    this.answer3 = answer3,
    this.answer4 = answer4
}

var first = new Trivia(
    "The beaver is the national emblem of which country?",
    "Canada",
    "United States of America",
    "Australia",
    "Africa"
)

var second = new Trivia(
    "Which TV character said, “Live long and prosper”?",
    "Mr. Spock",
    "Aragorn",
    "Luke Skywalker",
    "Superman"
)

var third = new Trivia(
    "What is the name of Batman’s butler?",
    "Alfred",
    "Gordon",
    "Robin",
    "Bruce"
)

var questions = [first, second, third];

function printQ(object){
    var field = [".field1", ".field2", ".field3", ".field4"];
    var answers = ["answerRight", "answer2", "answer3", "answer4"];
    
    var index;
    var x = 4;
    $(".question").text(object.question);
    for(let i = 0; i < 4; i++){
        index = Math.floor(Math.random()*x);
        console.log(index);
        $(field[i]).text(object[answers[index]]);
        answers.splice(index, 1);
        x--;
    }
}

function chooseQ(){
    var index;
    index = Math.floor(Math.random()*questions.length);
    printQ(questions[index]);
    questions.splice(index, 1);
}

$(document).ready(function(){

$(".test").on("click", chooseQ);

})