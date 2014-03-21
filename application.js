$(document).ready(function () {


//questions array
    var questions = [{
        question: "How much electric power does the DeLorean need to time-travel?",
        choices: ["1.21 Gigawatts",  "1.22 Gigawatts", "21 Gigawatts", "1.21 Terawatts" ,"2 Gigawatts"],
        questionValue: 0,
        correct: 0,
        answerText: "The answer is 1.21 Gigawatts. Doc states that the time machine is electrical but that he needs a nuclear reaction (produced by plutonium stolen from a group of Libyan terrorists) to generate the 1.21  &quot;jigawatts&quot; of electricity needed."
    }, {
        question: "Before his performance of &quot;Johnny B. Goode&quot; at the Enchantment Under The Sea Dance, what song does Marty help the band play?",
        choices: [ "Beyond The Sea", "Just My Imagination","Night Train","Earth Angel"],
        questionValue: 1,
        correct: 3,
        answerText: "The answer is Earth Angel. Marty agreed to play this song because he needed his parents to dance, kiss, and ultimately fall in love so he wouldn't be erased from existance!"
    }, {
        question: "Which US President referred to the film in a State of the Union address?",
        choices: ["Jimmy Carter", "George Bush", "Ronald Reagan", "Bill Clinton"],
        questionValue: 2,
        correct: 2,
        answerText: "The answer is Ronald Regan. When Reagan first watched Back to the Future at the movie theater in the White House, he reportedly was so amused that Emmett Brown could not believe an actor like him could become president, he had the projectionist stop and rewind the film to replay the scene. He later referred to the movie in his 1986 State of the Union address when he said, &quot;Never has there been a more exciting time to be alive, a time of rousing wonder and heroic achievement. As they said in the film Back to the Future, &#39;Where we're going, we don't need roads!&#39;&quot;"
    }, {
        question: "When dressed as the alien Darth Vader, what band's music does Marty use to wake up George?",
        choices: ["Van Halen", "AC/DC", "Black Sabbath", "Metallica"],
        questionValue: 3,
        correct: 0,
        answerText: "The answer is Van Halen. When Marty pretends to be Darth Vader from the planet Vulcan, he plays a tape labeled &quot;Van Halen&quot; to scare George out of his sleep."
    }, {
        question: "The actor who played Biff later went on to play a gym teacher in which cult classic series?",
        choices: [ "Undeclared", "Freaks and Geeks", "The Torkelsons","Degrassi"],
        questionValue: 4,
        correct: 1,
        answerText: "The answer is Freaks and Geeks. Thomas F. Wilson, most famously known for playing Biff Tannen, also played McKinley High School's Coach Ben Fredricks in Freaks and Geeks."
    }];
//Global Variables
    var numberOfQuestionsAnswered = 0;
    var userAnswer = "";
    var i = 0
    console.log("question" + i)

	$("#questionContainer").html(questions[i].question);
    $("#1stChoice").append(questions[i].choices[0]);
    $("#2ndChoice").append(questions[i].choices[1]);
    $("#3rdChoice").append(questions[i].choices[2]);
    $("#4thChoice").append(questions[i].choices[3]);
   
//Check My Guess button


 $('body').on('click', '#submit', function () {
        var userAnswer = $("input[type='radio']:checked").val();
        
        if (userAnswer == undefined) {
            $("#result").html("Please select an option.");
         }

        else if (userAnswer == questions[i].correct) {
            console.log(userAnswer);
            console.log(questions[i].correct);
            console.log("CORRECT");
            $("#result").html("Great Scott, that's correct! ").fadeIn(50).fadeOut(50).fadeIn(50);
            numberOfQuestionsAnswered += 1;
            console.log(numberOfQuestionsAnswered);
            $("#answerContainer").html(questions[i].answerText).fadeIn(50).fadeOut(50).fadeIn(50);
            $("#submit").hide();
            $("#next").show();
            $("#answersCorrect").show();
            $("#answersCorrect").html("Answers Correct: " + numberOfQuestionsAnswered + " of 5")
                if (i === 4) {
                console.log("complete")
                $("#submit").hide();
                $("#restart").show();
                $("#next").hide();
                
                } 
            }

            else {
            console.log("incorrect");
            $("#result").html("I'm afraid that's incorrect. ");
            $("#answerContainer").html(questions[i].answerText);
            $("#submit").hide();
            $("#next").show();
                if (i === 4) {
                console.log("complete")
                $("#submit").hide();
                $("#restart").show();
                $("#next").hide();
                $
                } 
            }
        
    });
var clearQuestion = function (){
        $("#questionContainer").html(questions[i].question);
        $("#1stChoice").html(questions[i].choices[0]);
        $("#2ndChoice").html(questions[i].choices[1]);
        $("#3rdChoice").html(questions[i].choices[2]);
        $("#4thChoice").html(questions[i].choices[3]);
        $("#answerContainer").html("");
        $("#result").html("");
        $("input:radio").prop('checked', false);
};

// Next question button
    $('body').on('click', '#next', function () {
        $('#submit').show();
    	$("#next").hide();
        i = i + 1;
        console.log("question" + i)
        return clearQuestion();
    });





// Play again? button function. hides next button, resets i to 0. Clears answer, result, radio input, and answers correct. Shows Submit button.
    $('body').on('click', '#restart', function () {
        $(this).hide();
        $("#next").hide();
        i = 0;
        $('#submit').show();
        $("#answersCorrect").hide();
        numberOfQuestionsAnswered=0;
        return clearQuestion();
        
    });

	$("#next").hide();
    $("#restart").hide();
    $("#answersCorrect").hide();
});