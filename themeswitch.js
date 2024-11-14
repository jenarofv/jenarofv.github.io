const theBody = document.querySelector("body");
const bodyStyle = window.getComputedStyle(theBody);
const themeSwitcher = document.getElementById("themeSwitch");
const logos = document.querySelectorAll(".logo");
const textLinks = document.querySelectorAll(".textlink");
const buttons = document.querySelectorAll(".button");

const switchThemes = () => {
    theBody.classList.toggle("darkBody");
    for (const logo of logos) {
        logo.classList.toggle("darkLogo");
    }
    for (const textLink of textLinks) {
        textLink.classList.toggle("darkText");
    }
    for (const button of buttons) {
        button.classList.toggle("darkButton");
    }
}

themeSwitcher.addEventListener("click", switchThemes);
