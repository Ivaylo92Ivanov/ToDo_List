import EditIcon from "./icons/edit-button.svg"
import { updateProject } from "./to-do";


export function clearDisplay() {
    const display = document.querySelector('.display');
    display.innerHTML = "";
}

export function makeNewProjectButtonActive() {
    const newProjectButton = document.querySelector(".new-project-button");
    newProjectButton.classList.remove("clicked");
}

export function makeNewProjectButtonInactive() {
    const newProjectButton = document.querySelector(".new-project-button");
    newProjectButton.classList.add("clicked");
}
 
export function displayNewProjectForm() {
    const display = document.querySelector('.display');
    display.innerHTML ='\
    <form action="" class="new-project-form">\
        <h1>Create New Project</h1>\
        <li><label for="title" >Project Title:</label></li>\
        <li><input type="text" id="title" value=""></li>\
        <li><label for="priority">Pick Priority:</label></li>\
        <li>\
            <select name="priority" id="priority">\
                <option value="None">None</option>\
                <option value="High">High</option>\
                <option value="Medium">Medium</option>\
                <option value="Low">Low</option>\
            </select>\
        </li>\
        <li><label for="date">Due Date:</label></li>\
        <li><input type="date" id="date" value=""></li>\
        <li><label for="description">Description:</label>\</li>\
        <li><textarea name="description" id="description" cols="" rows="20"></textarea></li>\
        <li class="form-buttons-wrapper">\
        <button type="submit" class="submit-button">Create Project</button>\
        <button type="button" class="cancel-form-button">Cancel</button>\
        </li>\
    </form>';
    
    const cancelButton = document.querySelector(".cancel-form-button");
    cancelButton.addEventListener("click", () => cancelProjectSubmission());
};

function cancelProjectSubmission() {
    makeNewProjectButtonActive();
    clearDisplay();
};

export function renderProjectsInNav(projectsList) {
    const projectsDiv = document.querySelector(".projects-div");
    projectsDiv.innerHTML = "";

    projectsList.forEach(currentProject => {
        let projectElement = document.createElement("button");
        projectElement.className = "project-element-title";
        if (!currentProject.title) currentProject.title="Default Project";
        projectElement.textContent = currentProject.title;
        setCurrentProjectId(projectsList, currentProject);
        setMatchingIdForProjectElement(projectElement, currentProject.id);
        projectsDiv.appendChild(projectElement);
    });

    addEventListenerToProjectElements(projectsList);
};

function setCurrentProjectId(projectsList, project) {
    project.id = projectsList.indexOf(project);
};

function setMatchingIdForProjectElement(projectElement, id) {
    projectElement.setAttribute("data-id", id);
    console.log(projectElement)
};

function addEventListenerToProjectElements(projectsList) {
    let projectsTitlesList = document.querySelectorAll(".project-element-title");
    projectsTitlesList.forEach(project => {
        let projectId = project.dataset.id;
        project.addEventListener("click", () => {renderProjectInDisplay(projectsList[projectId])});
    });
};

function renderProjectInDisplay(project) {
    makeNewProjectButtonActive();
    const displayDiv = document.querySelector(".display");
    displayDiv.innerHTML = `\
    <div class="project-display">\
        <h1 class="project-display-title">${project.title}</h1>\
        <li><strong>Priority:</strong> ${project.priority}</li>\
        <li><strong>Due Date:</strong> ${project.dueDate}</li>\
        <li><strong>Project Description:</strong> ${project.description}\</li>\
        <button class="edit-project-button"><img src="${EditIcon}" height="17px"/>Edit Project</button>
    </div>\
    <br>\
    <div class="to-do-display">\
        <h3>To-do:</h3><br>
        <li>Task 1</li>\
        <li>Task 2</li>\
        <li>Task 3</li>\
        <li>Task 4</li>\
        <li>Task 5</li>\
    </div>`
    const editButton = document.querySelector(".edit-project-button");
    editButton.addEventListener("click", () =>  editProject(project));
}

function editProject(project) {
    const display = document.querySelector('.display');
    display.innerHTML =`\
    <form action="" class="new-project-form">\
        <h1>Edit Project "${project.title}"</h1>\
        <li><label for="title" >Project Title:</label></li>\
        <li><input type="text" id="title" value="${project.title}"></li>\
        <li><label for="priority">Pick Priority:</label></li>\
        <li>\
            <select name="priority" id="priority">\
            <script></script>
                <option value="None">None</option>\
                <option value="High">High</option>\
                <option value="Medium">Medium</option>\
                <option value="Low">Low</option>\
            </select>\
        </li>\
        <li><label for="date">Due Date:</label></li>\
        <li><input type="date" id="date" value="${project.dueDate}"></li>\
        <li><label for="description">Description:</label>\</li>\
        <li><textarea name="description" id="description" cols="" rows="20">${project.description}</textarea></li>\
        <li class="form-buttons-wrapper">\
        <button type="submit" class="save-edit-button">Save Changes</button>\
        <button type="button" class="cancel-form-button">Cancel</button>\
        </li>\
    </form>`;
    
    //have the option for priority set as selected
    const options = document.querySelectorAll("option");
    options.forEach(option => {if(option.value == project.priority) option.setAttribute('selected','selected')})


    const cancelButton = document.querySelector(".cancel-form-button");
    cancelButton.addEventListener("click", () => cancelProjectSubmission());

    const saveChangesButton = document.querySelector(".save-edit-button");
    saveChangesButton.addEventListener("click", (e) => {
        e.preventDefault();
        updateProject(project);
        clearDisplay();
    });
    // priority doesnt display the current value, but resets
}

