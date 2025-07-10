function playProperAudio(key) {
    let audioName = "tom-1";

    switch (key) {
        case "w":
            audioName = "tom-1";
            break;
        case "a":
            audioName = "tom-2";
            break;
        case "s":
            audioName = "tom-3";
            break;
        case "d":
            audioName = "tom-4";
            break;
        case "j":
            audioName = "snare";
            break;
        case "k":
            audioName = "crash";
            break;
        case "l":
            audioName = "kick-bass";
            break;
        default:
            console.error(`The button ${key} is not supported.`);
            return;
    }

    new Audio(`./sounds/${audioName}.mp3`).play();
}

function buttonAnimation(key) {
    let activeButton = document.querySelector(`.${key}`);
    activeButton.classList.add("pressed");
    window.setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}

[...document.querySelectorAll("button")].forEach((element) => {
    element.addEventListener("click", function () {
        playProperAudio(this.textContent);
        buttonAnimation(this.textContent);
    });
});

// Adding an event listener to the entire document,
// so that the entire document listens to keyboard strokes.
document.addEventListener("keydown", (event) => {
    playProperAudio(event.key);
    buttonAnimation(event.key);
});
