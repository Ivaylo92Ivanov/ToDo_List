import "./styles.css";
import { getNewProjectFormData, createNewProject } from "./to-do.js";
import { renderProjects, clearDisplay, popFormUp } from "./dom-manipulation";

const body = document.querySelector("body");

const header = document.createElement("div");
header.className = "header";
header.innerHTML = "<h1>My To-Do List</h1>";
body.appendChild(header);

const main = document.createElement("div");
main.className = "main";

const nav = document.createElement("div"); 
nav.className = "nav";


const homeHeader = document.createElement("h2");
homeHeader.textContent = "Home";

const projectsHeader = document.createElement("h2");
projectsHeader.textContent = "Projects:";

const newProjectButton = document.createElement("button");
newProjectButton.className = "new-project-button";
newProjectButton.textContent = "New Project +";

const protectsListDiv = document.createElement("div");
protectsListDiv.className = "projects-div";

nav.appendChild(homeHeader);
nav.appendChild(projectsHeader);
nav.appendChild(newProjectButton);
nav.appendChild(protectsListDiv);

const display = document.createElement("div");
display.className = "display";

main.appendChild(nav);
main.appendChild(display);
body.appendChild(main);


const footer = document.createElement("div");
footer.className = "footer";
footer.innerHTML = '<p>Background photo by <a href="https://unsplash.com/@andrewtneel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andrew Neel\
                    </a> on <a href="https://unsplash.com/photos/cckf4TsHAuw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>\
                    <a href="https://github.com/Ivaylo92Ivanov">Created by Ivaylo I.</a>';

body.appendChild(footer);


let projectsList = []
newProjectButton.addEventListener("click", () => {
    popFormUp();
    const newProjectFormSubmitButton = document.querySelector(".submit-button");
    newProjectFormSubmitButton.addEventListener("click", e => {
        e.preventDefault();
        let currentProject = createNewProject(getNewProjectFormData());
        projectsList.push(currentProject);
        renderProjects(projectsList);
        console.log(projectsList);
        clearDisplay();
    });
});