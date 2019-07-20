//some variables so the LEDs will fit the container on different screen sizes
//however not dynamic, page needs to be refreshed
var x = (window.innerWidth * 0.45 - 60)/6;
var y = ($(".container").height()/ 4) + 6;
var x1 = ((window.innerWidth * 0.45 - 60)/12);
var y1 = ($(".container").height()/8) + 6;
var width = $(".container").width() +28;
var height = $(".container").height()+28;

//big array of LED positions, I'm sure there's an easier way to do this
//but could not think of it at the time
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

//append each div LED to position
function bigLeds (){
    for(let i = 0; i < bigLedArray.length; i++){
        var led = document.createElement("div");
        led.className = bigLedArray[i].class;
        led.style.top = bigLedArray[i].top;
        led.style.left = bigLedArray[i].left;
        $(".border").prepend(led);
    }
}

//setting up game object
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
        q3: "Which of these is not a public inn in Middle Earth?",
        q4: "How many Rings of Power were forged in the second age?",
        q5: "Gollum wasn't always Gollum. He was a hobbit of the River-folk. What was his name?",
        q6: "Who is Shelob?",
        q7: "Gandalf is imprisoned on top of Orthanc by Saruman. Who helps him escape?",
        q8: "In the film adaptions of 'Lord of the Rings,' what is Aragorn's horse called?",
        q9: "According to the books, who does Saruman call the 'Bird-whisperer'?",
        q10: "Who stabs Saruman in the beginning of the movie 'The Return of the King'?"
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
        ],
        q4: ["1", "19", "20", "13"],
        q5: ["Darren", "Bandobras", "Smeagol", "Tobold"],
        q6: ["An Ent that befriends Pippin and Merry", "A spider that tries to eat Frodo", "An elf queen", "An Uruk-hai leader"],
        q7: ["Aragorn, Gimli, and Legolas", "Frodo and Sam", "Gwaihir", "Gothmog"],
        q8: ["Bill", "Brego", "Roheryn", "Asfaloth"],
        q9: ["Radagast", "Gandalf", "Legolas", "Sam"],
        q10: ["Theoden", "Aragorn", "Gandalf", "Wormtongue"]

    },

    answers: {
        q1: "Dwarves",
        q2: "Giant Spiders",
        q3: "The Southern Star",
        q4: "20",
        q5: "Smeagol",
        q6: "A spider that tries to eat Frodo",
        q7: "Gwaihir",
        q8: "Brego",
        q9: "Radagast",
        q10: "Wormtongue"
    },

    next: function() {
        //reset timer to 10
        trivia.answerChosen = false;
        trivia.timer = 10;
        if (trivia.currentQ < Object.keys(trivia.questions).length) {
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
        //timer zero and questions remaining call next question
        //time greater than zero decrease timer
        if (trivia.timer > 0 && trivia.currentQ < Object.keys(trivia.questions).length) {
            trivia.timer--;
            $(".time").text(trivia.timer);

        //reaches 0 and nothing picked increment missed    
        } else if (trivia.timer === 0) {
            if (trivia.answerChosen === false) {
                trivia.missed++;
            }
            trivia.currentQ++;
            clearInterval(trivia.clockRunning);
            trivia.next();
        // if no more questions to call end the game    
        } else {
            trivia.endGame();
        }
    },

    guess: function() {
        //check clicked value with answer
        trivia.answerChosen = true;
        var thisAnswer = Object.values(trivia.answers)[trivia.currentQ];
        //if wrong ++ wrong, set answer chosen to true
        if (thisAnswer === $(this).text()) {
            trivia.right++;
            $(".border").css("opacity", "0");

            Swal.fire({
                type: 'success',
                title: 'Correct!',
                position: 'center',
                showConfirmButton: false,
                timer: 1800
            });

            clearInterval(trivia.clockRunning);
            setTimeout(function(){
                $(".border").css("opacity", "1");
                trivia.next();
            }, 2000);
        }
        //if right ++ right, set answer chosen to true
        else {
            trivia.wrong++;
            $(".border").css("opacity", "0");

            Swal.fire({
                type: 'error',
                title: 'Incorrect',
                text: "The correct answer is " + Object.values(trivia.answers)[trivia.currentQ],
                position: 'center',
                showConfirmButton: false,
                timer: 1800
            });

            clearInterval(trivia.clockRunning);
            setTimeout(function(){
                $(".border").css("opacity", "1");
                trivia.next();
            }, 2000);
        }

        //increment question set
        trivia.currentQ++;

        //if no more questions left to ask end game
        if (trivia.currentQ >= Object.keys(trivia.questions).length) {
            setTimeout(function(){
               trivia.endGame(); 
            }, 2000);
            
        };
    },

    //function to end the game and show score
    endGame: function() {
        clearInterval(trivia.clockRunning);
        $(".choice").off("click", trivia.guess);
        $(".question").text("Game Over!");
        $(".field0").text("Correct: " + trivia.right);
        $(".field1").text("Wrong: " + trivia.wrong);
        $(".field2").text("Missed: " + trivia.missed);
        $(".field3").on("click", trivia.newGame);
        $(".field3").text("Restart?");
        $(".time").empty();
    },

    //reset function to initialize game to start
    newGame: function() {
        $(".field3").off("click", trivia.newGame);
        $(".choice").on("click", trivia.guess);
        trivia.currentQ = 0;
        trivia.missed = 0;
        trivia.right = 0;
        trivia.wrong = 0;
        clearInterval(trivia.clockRunning);
        trivia.next();
        
    }
};


$(document).ready(function() {
    //set up LEDs
    bigLeds();
    //call first question
    trivia.next();
    //click event for guessing answers
    $(".choice").on("click", trivia.guess);
});
