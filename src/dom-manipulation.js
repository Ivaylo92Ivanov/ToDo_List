import EditIcon from "./icons/edit-button-icon.svg"
import DeleteIcon from "./icons/delete-button-icon.svg"
import { updateProject } from "./to-do";


export function clearDisplay() {
    const display = document.querySelector('.display');
    display.innerHTML = '\
    <h2>To Begin:</h2><br><li> Create a new project</li>\
    <li> Pick an existing project from the list</li>'
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
        <button type="button" class="cancel-form-button">Cancel</button>\
        <button type="submit" class="submit-button">Create Project</button>\
        </li>\
    </form>';
    
    const cancelButton = document.querySelector(".cancel-form-button");
    cancelButton.addEventListener("click", () => cancelProjectSubmission());
};

function cancelProjectSubmission() {
    makeNewProjectButtonActive();
    clearDisplay();
};

export function renderProjectsInNav(projectsLibrary) {
    const projectsDiv = document.querySelector(".projects-div");
    projectsDiv.innerHTML = "";

    projectsLibrary.getLibrary().forEach(currentProject => {
        let projectElement = document.createElement("button");
        projectElement.className = "project-element-title";
        if (!currentProject.title) currentProject.title="Default Project";
        projectElement.textContent = currentProject.title;
        setCurrentProjectId(projectsLibrary, currentProject);
        setMatchingIdForProjectElement(projectElement, currentProject.id);
        projectsDiv.appendChild(projectElement);
    });

    addEventListenerToProjectElements(projectsLibrary);
};

function setCurrentProjectId(projectsLibrary, project) {
    project.id = projectsLibrary.getLibrary().indexOf(project);
};

function setMatchingIdForProjectElement(projectElement, id) {
    projectElement.setAttribute("data-id", id);
};

function addEventListenerToProjectElements(projectsLibrary) {
    let projectsTitlesList = document.querySelectorAll(".project-element-title");
    projectsTitlesList.forEach(project => {
        let projectId = project.dataset.id;
        project.addEventListener("click", () => {renderProjectInDisplay(projectsLibrary,projectsLibrary.getLibrary()[projectId])});
    });
};

function renderProjectInDisplay(projectsLibrary, project) {
    makeNewProjectButtonActive();
    const displayDiv = document.querySelector(".display");
    displayDiv.innerHTML = `\
    <div class="project-display">\
        <h1 class="project-display-title">${project.title}</h1>\
        <li><strong>Priority:</strong> ${project.priority}</li>\
        <li><strong>Due Date:</strong> ${project.dueDate}</li>\
        <li><strong>Project Description:</strong> ${project.description}\</li>\
        <button class="edit-project-button"><img src="${EditIcon}" height="17px"/>Edit Project</button>\
        <button class="delete-project-button"><img src="${DeleteIcon}" height="17px"/>Delete Project</button>
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

    const deleteButton = document.querySelector(".delete-project-button");
    deleteButton.addEventListener("click", () => deleteProject(projectsLibrary, project));
}

function editProject(project) {
    const display = document.querySelector('.display');
    display.innerHTML =`\
    <form action="" class="new-project-form">\
        <h1>Edit Project "<em>${project.title}</em>"</h1>\
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
        <button type="button" class="cancel-form-button">Cancel</button>\
        <button type="submit" class="save-edit-button">Save Changes</button>\
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
    
}

 function deleteProject(projectsLibrary, project) {
    if(confirm(`Are you sure you want to delete project ${project.title}?`)) {
        projectsLibrary.removeProject(project.id);
        renderProjectsInNav(projectsLibrary);
        clearDisplay();
    } else {
     return
    }
}