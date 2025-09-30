// script.js
const btn = document.getElementById("btn");
const title = document.getElementById("title");

btn.addEventListener("click", () => {
    title.textContent = "Button Clicked!";
});
