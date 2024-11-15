const theBody = document.querySelector("body");
const bodyStyle = window.getComputedStyle(theBody);
const themeSwitcher = document.getElementById("themeSwitch");
const logos = document.querySelectorAll(".logo");
const textLinks = document.querySelectorAll(".textlink");
const buttons = document.querySelectorAll(".button");
const projects = document.querySelectorAll(".entry");

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
    for (const project of projects) {
        project.classList.toggle("darkEntry");
    }
}

function showProjects() {
    this.classList.toggle("show");
    this.nextElementSibling.classList.toggle("show");
}

themeSwitcher.addEventListener("click", switchThemes);

for (const project of projects) {
    project.addEventListener("click", showProjects);
}
