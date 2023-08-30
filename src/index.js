import "./styles.css";
import {getNewProjectFormData, createNewProject} from "./to-do.js";
import { clearDisplay, popFormUp } from "./dom-manipulation";

const body = document.querySelector("body");

const header = document.createElement("div");
header.className = "header";
header.innerHTML = "<h1>My To-Do List</h1>";
body.appendChild(header);

const main = document.createElement("div");
main.className = "main";

const nav = document.createElement("div"); 
nav.className = "nav";

const homeDiv = document.createElement("div");
homeDiv.className = "home-div";
homeDiv.innerHTML = "<h2>Home</h2>";

const projectsDiv = document.createElement("div");
projectsDiv.className = "projects-div";
projectsDiv.innerHTML = "<h2>Projects:</h2><br>\
                        <button class='new-project-button'>New Project +</button><br>";

nav.appendChild(homeDiv);
nav.appendChild(projectsDiv);

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
const newProjectButton = document.querySelector(".new-project-button");
newProjectButton.addEventListener("click", () => {
    popFormUp();
    const newProjectFormSubmitButton = document.querySelector(".submit-button");
    newProjectFormSubmitButton.addEventListener("click", e => {
        e.preventDefault();
        projectsList.push(createNewProject(getNewProjectFormData()));
        console.log(projectsList);
        clearDisplay();
    });
});