const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
let level = 0;
let started = false;
let firstGameEnded = false;

const playSound = (name) => {
    new Audio(`./sounds/${name}.mp3`).play();
};

const animatePress = (currentColour) => {
    $(`#${currentColour}`).addClass("pressed");
    setTimeout(() => {
        // Code executed after the delay
        $(`#${currentColour}`).removeClass("pressed");
    }, 100);
};

const startOver = () => {
    level = 0;
    userClickedPattern.length = 0;
    gamePattern.length = 0;
    started = false;
    firstGameEnded = true;
};

const nextSequence = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    // console.log(randomChosenColour);
    $(`#${randomChosenColour}`).fadeOut(200).fadeIn(200);

    playSound(randomChosenColour);
    level++;
    $("#level-title").text(`Level ${level}`);
};

const checkAnswer = (currentLevel) => {
    if (gamePattern[currentLevel] != userClickedPattern[currentLevel]) {
        // Wrong answer. Game over
        // console.log("wrong");
        new Audio("./sounds/wrong.mp3").play();

        // Temporarily apply game-over class to the body
        $(document.body).addClass("game-over");
        setTimeout(() => {
            $(document.body).removeClass("game-over");
        }, 200);

        // Feedback for the player
        $("#level-title").text("Game Over, Press Any Key to Restart");

        // Make it possible to restart the next game by pressing any key
        startOver();

        return;
    }

    // console.log("success");
    if (currentLevel != gamePattern.length - 1) return;

    // The user has completed the full sequence.
    // console.log("FULL SUCCESS");
    setTimeout(nextSequence, 1000);
    userClickedPattern.length = 0;
};

$(".btn").click(function () {
    if (!started) return;

    const userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

$(document).keydown((event) => {
    // The first game must be started by pressing A
    if (started || (!firstGameEnded && !["a", "A"].includes(event.key))) {
        return;
    }

    started = true;
    $("#level-title").text(`Level ${level}`);
    userClickedPattern.length = 0; // Clear the array
    nextSequence();
});

/**
 * if level > 0
 *
 * if !firstGameEnded
 *   (must be A)
 *   if !A
 */
