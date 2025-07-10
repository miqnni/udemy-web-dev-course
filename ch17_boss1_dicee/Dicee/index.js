// const loadHandler = () => {
//     document.body.style.backgroundColor = "darkred";
// };
// loadHandler();

// Generate random numbers
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Display the proper images based on the generated random numbers
[...document.getElementsByClassName("img1")].forEach((el) => {
    el.setAttribute("src", `./images/dice${randomNumber1}.png`);
});
[...document.getElementsByClassName("img2")].forEach((el) => {
    el.setAttribute("src", `./images/dice${randomNumber2}.png`);
});

// Determine the winner and change the title accordingly
let h1Text = "(no text)";
if (randomNumber1 === randomNumber2) {
    h1Text = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    h1Text = "<- Player 1 wins!";
} else {
    h1Text = "Player 2 wins! ->";
}

[...document.getElementsByTagName("h1")].forEach((el) => {
    el.textContent = h1Text;
});
