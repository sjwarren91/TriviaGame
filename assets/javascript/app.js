var trivia = {
    right : 0,
    wrong : 0,
    missed : 0,
    currentQ : 0,
    timer : 0,
    clockRunning : "",
    answerChosen : false,
    
    questions : {
        q1 : "What are Durin's Folk more commonly known as?",
        q2 : "What kind of creatures are the spawn of Ungoliant?",
        q3 : "Which of these is not a public inn in Middle Earth?"
    },

    choices : {
        q1 : ["Hobbits from outside The Shire", "Dwarves", "Forest Elves", "Great Eagles"],
        q2 : ["Hill Giants", "Uruk-hai", "Giant Spiders", "Flying fell beasts"],
        q3 : ["The Old Guesthouse", "The Green Dragon", "The Prancing Pony", "The Southern Star"]
    },

    answers : {
        q1 : "Dwarves",
        q2 : "Giant Spiders",
        q3 : "The Southern Star"
    },

    next : function(){
        //set timer to 0
        trivia.timer = 10;
        $(".time").text(trivia.timer);
        //start timer
        trivia.clockRunning = setInterval(trivia.clock, 1000);
        //display question and answers, get questions and answers from object
        var question = Object.values(trivia.questions)[trivia.currentQ];
        console.log(question);
        var options = Object.values(trivia.choices)[trivia.currentQ];
        console.log(options);
        //print question to question field
        $(".question").text(question);
        //print each option to option fields
        $.each(options, function(index, value){
            $(".field" + index).text(value);
        });
    },

    clock : function(){
        //reaches 0 and nothing picked increment wrong
        //time greater than zero decrease timer
        //timer zero and questions remaining 

        if(trivia.timer === 0 && trivia.currentQ < 3){
            if (trivia.answerChosen === false){
                trivia.missed++;
                console.log(trivia.missed);
            }
            trivia.currentQ++;
            trivia.next();
            clearInterval(trivia.clockRunning);
        }
        else if (trivia.timer > 0 && trivia.currentQ < 3) {
            trivia.timer--;
            $(".time").text(trivia.timer);
        }
        else {
            clearInterval(trivia.clockRunning);
        }


    },

    guess : function(){
        //check clicked value with answer
        
        var thisAnswer = trivia.answers[trivia.currentQ];
        //if wrong ++ wrong set answer chosen to true
        if(thisAnswer === $(this).text()){
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
        console.log(trivia.currentQ)
        if (trivia.currentQ > 2){
            //call end game function
        } else {
            trivia.next();
        }

    }

}

$(document).ready(function(){
    

    trivia.next();
    
    $(".choice").on("click", trivia.guess)
    
})







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

