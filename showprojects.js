const projects = document.querySelectorAll(".entry");

function showProjects() {
    this.classList.toggle("show");
    this.nextElementSibling.classList.toggle("show");
}


for (const project of projects) {
    project.addEventListener("click", showProjects);
}
