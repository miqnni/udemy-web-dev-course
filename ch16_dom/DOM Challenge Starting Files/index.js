document.querySelector("ul").lastElementChild.innerHTML = "Custom Text";

const listItems = Array.from(
    document.getElementsByTagName("li") // Type: HTMLCollection
);
// OR:
// const listItems = [...document.getElementsByTagName("li")];

listItems
    .filter((_val, idx) => idx % 2 === 0)
    .forEach((element) => {
        element.style.backgroundColor = "lightgreen";
    });

document.getElementsByTagName("li")[2].style.color = "purple";
document.getElementsByClassName("btn")[0].style.backgroundColor = "yellow";

document.querySelector(
    'ul > li.list > a[href="https://www.google.com"]'
).style.color = "brown";
document
    .querySelector('ul > li.list > a[href="https://www.google.com"]')
    .setAttribute("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");

document.querySelector("input").click();

[...document.getElementsByTagName("h1")].forEach((el) => {
    console.log(el);
    el.classList.add("huge");
    // el.innerHTML = "<em>Henlo</em>";
    el.textContent = "Howdy!";
});
