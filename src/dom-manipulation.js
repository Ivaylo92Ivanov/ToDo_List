export function clearDisplay() {
    const display = document.querySelector('.display');
    display.innerHTML = "";
}

export function displayNewProjectForm() {
    const display = document.querySelector('.display');
    display.innerHTML ='<form action="" class="new-project-form">\
                            <h1>Create New Project</h1>\
                            <li><label for="title">Project Title:</label></li>\
                            <li><input type="text" id="title"></li>\
                            <li><label for="priority">Pick Priority:</label></li>\
                            <li>\
                                <select name="priority" id="priority">\
                                    <option value="none">None</option>\
                                    <option value="high">High</option>\
                                    <option value="medium">Medium</option>\
                                    <option value="low">Low</option>\
                                </select>\
                            </li>\
                            <li><label for="date">Due Date:</label></li>\
                            <li><input type="date" id="date"></li>\
                            <li><label for="description">Description:</label>\</li>\
                            <li><textarea name="description" id="description" cols="" rows="20"></textarea></li>\
                            <li class="form-buttons-wrapper">\
                            <button type="submit" class="submit-button">Create Project</button>\
                            <button type="button" class="cancel-form-button">Cancel</button>\
                            </li>\
                        </form>';
    
    const cancelButton = document.querySelector(".cancel-form-button");
    cancelButton.addEventListener("click", () => cancelNewProjectSubmission());
};

function cancelNewProjectSubmission() {
    const newProjectButton = document.querySelector(".new-project-button");
    newProjectButton.classList.remove("clicked");
    clearDisplay();
};

export function showProjectsInNav(projectsList) {
    const projectsDiv = document.querySelector(".projects-div");
    projectsDiv.innerHTML = "";

    projectsList.forEach(currentProject => {
        let projectElement = document.createElement("button");
        projectElement.className = "project-nav-title";
        if (!currentProject.title) currentProject.title="Default Project";
        projectElement.textContent = currentProject.title;
        setCurrentProjectId(projectsList, currentProject);
        setMatchingIdForProjectElement(projectElement, currentProject.id);
        console.log(currentProject)
        console.log(projectElement)
        projectsDiv.appendChild(projectElement);
    });

    addEventListenerToProjectElements(projectsList);
};

function setCurrentProjectId(projectsList, project) {
    project.id = projectsList.indexOf(project);
};

function setMatchingIdForProjectElement(projectElement, id) {
    projectElement.setAttribute("data-id", id);
};

// logic should link the projectObjects to the Dom Element
function addEventListenerToProjectElements(projectsList) {
    let projectsTitlesList = document.querySelectorAll(".project-nav-title");
    projectsTitlesList.forEach(project => {
        let projectId = project.dataset.id;
        project.addEventListener("click", () => {renderProjectInDisplay(projectsList[projectId])});
    });
};

export function renderProjectInDisplay(project) {
    const displayDiv = document.querySelector(".display");
    console.log(project)
   
}

