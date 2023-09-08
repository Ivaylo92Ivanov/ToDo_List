import EditIcon from "./icons/edit-button-icon.svg"
import DeleteIcon from "./icons/delete-button-icon.svg"


import { projectsCreator, getProjectFormData, updateProject, noteCreator } from "./to-do";

export const domManipulator = (() => {
    let projectsLibrary;
    const getLibrary = (library) => projectsLibrary = library;
    
    const createPage = () => {
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
        main.appendChild(nav);

        const display = document.createElement("div");
        display.className = "display";
        display.innerHTML = '\
        <h2>To Begin:</h2><br><li> Create a new project</li>\
        <li> Pick an existing project from the list</li>'

        main.appendChild(display);
        body.appendChild(main);

        const footer = document.createElement("div");
        footer.className = "footer";
        footer.innerHTML = '\
        <p>Background photo by <a href="https://unsplash.com/@andrewtneel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andrew Neel\
        </a> on <a href="https://unsplash.com/photos/cckf4TsHAuw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>\
        <a href="https://github.com/Ivaylo92Ivanov">Created by Ivaylo I.</a>';

        body.appendChild(footer);

        newProjectButton.addEventListener("click", () => {
            if (newProjectButton.classList.contains("clicked")) {
                // do nothing
            } else {
                displayNewProjectForm();
                makeNewProjectButtonInactive();
                const newProjectFormSubmitButton = document.querySelector(".submit-button");
                newProjectFormSubmitButton.addEventListener("click", e => {
                    e.preventDefault();
                    let currentProject = projectsCreator(getProjectFormData());
                    projectsLibrary.addProject(currentProject);
                    renderProjectsInNav(projectsLibrary);
                    clearDisplay();
                    makeNewProjectButtonActive();
                });
            };
        });
    };
    
    function clearDisplay() {
        const display = document.querySelector('.display');
        display.innerHTML = '\
        <h2>To Begin:</h2><br><li> Create a new project</li>\
        <li> Pick an existing project from the list</li>'
    };

    function makeNewProjectButtonActive() {
        const newProjectButton = document.querySelector(".new-project-button");
        newProjectButton.classList.remove("clicked");
    }
    
    function makeNewProjectButtonInactive() {
        const newProjectButton = document.querySelector(".new-project-button");
        newProjectButton.classList.add("clicked");
    }
     
    function displayNewProjectForm() {
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
        cancelButton.addEventListener("click", () => cancelFormSubmission());
    };
    
    function cancelFormSubmission() {
        makeNewProjectButtonActive();
        clearDisplay();
    };
    
    function renderProjectsInNav() {
        const projectsDiv = document.querySelector(".projects-div");
        projectsDiv.innerHTML = "";
    
        projectsLibrary.getLibrary().forEach(currentProject => {
            let projectElement = document.createElement("button");
            projectElement.className = "project-element-title";
            if (!currentProject.title) currentProject.title="Default Project";
            projectElement.textContent = currentProject.title;
            setCurrentProjectId( currentProject);
            setMatchingIdForProjectElement(projectElement, currentProject.id);
            projectsDiv.appendChild(projectElement);
        });
    
        addEventListenerToProjectElements();
    };
    
    function setCurrentProjectId(project) {
        project.id = projectsLibrary.getLibrary().indexOf(project);
    };
    
    function setMatchingIdForProjectElement(projectElement, id) {
        projectElement.setAttribute("data-id", id);
    };
    
    function addEventListenerToProjectElements() {
        let projectsTitlesList = document.querySelectorAll(".project-element-title");
        projectsTitlesList.forEach(project => {
            let projectId = project.dataset.id;
            project.addEventListener("click", () => {renderProjectInDisplay(projectsLibrary.getLibrary()[projectId])});
        });
    };
    
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
        cancelButton.addEventListener("click", () => cancelFormSubmission());
    
        const saveChangesButton = document.querySelector(".save-edit-button");
        saveChangesButton.addEventListener("click", (e) => {
            e.preventDefault();
            updateProject(project);
            clearDisplay();
        });
        
    }
    
     function deleteProject(project) {
        if(confirm(`Are you sure you want to delete project ${project.title}?`)) {
            projectsLibrary.removeProject(project.id);
            renderProjectsInNav(projectsLibrary);
            clearDisplay();
        } else {
         return
        }
    }

    function renderProjectInDisplay(project) {
        makeNewProjectButtonActive();
        const displayDiv = document.querySelector(".display");
        displayDiv.innerHTML = `\
        <div class="project-display">\
            <div class="project-display-content-wrapper">\
                <h1 class="project-display-title">${project.title}</h1>\
                <li><strong>Priority:</strong> ${project.priority}</li>\
                <li><strong>Due Date:</strong> ${project.dueDate}</li>\
                <li><strong>Project Description:</strong><p class="project-description-p">${project.description}<p>\</li>\
                <div class="project-display-buttons-wrapper">\
                    <button class="edit-project-button"><img src="${EditIcon}" height="17px"/>Edit Project</button>\
                    <button class="delete-project-button"><img src="${DeleteIcon}" height="17px"/>Delete Project</button>
                 </div>\ 
            </div>\
        <div class="todo-display">\
            <form action="" class="add-todo-form">\
            <input type="text" id="todo-note-input"></input>\    
                <button class="add-todo-button"><h4>+ TO-DO</h4></button>\   
            </form>\
            <div class="todo-list">\
                
            </div>\
        </div>`
        renderToDoNotes(project);

        const addToDoButton = document.querySelector(".add-todo-button");
        addToDoButton.addEventListener("click", (e) => {
            e.preventDefault();
            addToDoNote(project);
            renderToDoNotes(project);
        });
        
        const editButton = document.querySelector(".edit-project-button");
        editButton.addEventListener("click", () =>  editProject(project));
    
        const deleteButton = document.querySelector(".delete-project-button");
        deleteButton.addEventListener("click", () => deleteProject(project));
    }

    function addToDoNote(project) {
        let noteInput = document.getElementById("todo-note-input");
        if (noteInput.value) project.addToDoNote(noteCreator(noteInput.value));
        console.log(project.toDoNotes)
        noteInput.value = "";
    }

    function renderToDoNotes(project) {
        const toDoNotesDisplay = document.querySelector(".todo-list");
        toDoNotesDisplay.innerHTML = "";
        project.toDoNotes.forEach(noteObject => {
            toDoNotesDisplay.appendChild(noteObject.renderNote());
        });
        console.log("maybe here?")
    }

    return {createPage, getLibrary}
})()


