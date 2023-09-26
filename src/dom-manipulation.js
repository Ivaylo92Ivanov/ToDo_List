import EditIcon from "./icons/edit-button-icon.svg"
import DeleteIcon from "./icons/delete-button-icon.svg"
import ProjectIcon from "./icons/project.svg"
import { format, getWeek, addDays, subDays} from 'date-fns'
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

        const sidebar = document.createElement("div"); 
        sidebar.className = "sidebar";


        const homeHeader = document.createElement("h2");
        homeHeader.textContent = "To-Do:";

        const homeDiv = document.createElement("div");
        homeDiv.className = "home-div"

        const todayTasks = document.createElement("button");
        todayTasks.textContent = "Today";
        todayTasks.addEventListener("click", () => renderTodayTasks());

        const thisWeekTasks = document.createElement("button");
        thisWeekTasks.textContent = "This Week";
        thisWeekTasks.addEventListener("click", () => renderWeekTasks());

        homeDiv.appendChild(todayTasks);
        homeDiv.appendChild(thisWeekTasks);

        const projectsHeader = document.createElement("h2");
        projectsHeader.textContent = "Projects:";

        const newProjectButton = document.createElement("button");
        newProjectButton.className = "new-project-button";
        newProjectButton.innerHTML = "<h2>+ New Project</h2>"
        // newProjectButton.innerHTML = `<img src="${ProjectIcon}" alt="project-icon" height="30px"/>+`

        const protectsListDiv = document.createElement("div");
        protectsListDiv.className = "projects-div";

        sidebar.appendChild(homeHeader);
        sidebar.appendChild(homeDiv);
        sidebar.appendChild(projectsHeader);
        sidebar.appendChild(newProjectButton);
        sidebar.appendChild(protectsListDiv);
        main.appendChild(sidebar);

        const display = document.createElement("div");
        display.className = "display";
        display.innerHTML = '\
        <h2>To Begin:</h2><br><li> Create a new project</li>\
        <li> Pick an existing project from the sidebar</li>'

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
                    storeLibrary();
                    renderProjectsMenu();
                    clearDisplay();
                    makeNewProjectButtonActive();
                });
            };
        });
                
        localStorage.length > 0 ? renderStoredItems() : generateSeed();
    };


    function generateSeed() {
        let seedProject = projectsCreator(["Just a test project", "A test description, for a test project"]);
        seedProject.addNote(noteCreator("Just a test note", format(new Date(), "yyyy-MM-dd"), "High Priority"));
        seedProject.addNote(noteCreator("Note for testing purposes", (format(addDays(new Date(), 3), "yyyy-MM-dd")), "High Priority"));
        seedProject.addNote(noteCreator("Another test? You know it!", format(new Date(), "yyyy-MM-dd"), "High Priority"));
        seedProject.addNote(noteCreator("Test note fo` sho`", (format(addDays(new Date(), 11), "yyyy-MM-dd")), "High Priority"));
        seedProject.addNote(noteCreator("You guessed it! Test!", (format(subDays(new Date(),3), "yyyy-MM-dd")), "High Priority"));
        projectsLibrary.addProject(seedProject);
        renderProjectsMenu();
    }
    
    function renderStoredItems(){
        // go over all items in the localStorage
        for(let i=0; i < localStorage.length; i++) {
            let project = JSON.parse(localStorage[i]);
            // project[0] - project title
            // project[1] - project description
            // project[2] - array of notes of project - not JSON parsed
            let title = project[0]
            let description = project[1]
            let notes = project[2]
            let projectObject = projectsCreator([title, description])
            projectsLibrary.addProject(projectObject);
            renderProjectsMenu()

            // go over all the notes of the current project
            if(notes.length > 0) {
                notes.forEach(note => {
                    note = JSON.parse(note);
                    let content = note[0];
                    let dueDate = note[1];
                    let priority = note[2];
                    let isChecked = note[3];
                    let noteObject = noteCreator(content, dueDate, priority);
                    noteObject.setCheckedStatus(isChecked);
                    projectObject.addNote(noteObject);
                });
            };
        };
    };


    function clearDisplay() {
        const display = document.querySelector('.display');
        display.innerHTML = '\
        <h2>To Begin:</h2><br><li> Create a new project</li>\
        <li> Pick an existing project from the sidebar</li>'
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
    
    function renderProjectsMenu() {
        const projectsDiv = document.querySelector(".projects-div");
        projectsDiv.innerHTML = "";
    
        projectsLibrary.getLibrary().forEach(currentProject => {
            let projectElement = document.createElement("button");
            projectElement.className = "project-element-title";
            if (!currentProject.title) currentProject.title="Default Project";
            projectElement.textContent = currentProject.title;
            setCurrentProjectId(currentProject);
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
            <li><label for="description">Description:</label>\</li>\
            <li><textarea name="description" id="description" cols="" rows="20">${project.description}</textarea></li>\
            <li class="form-buttons-wrapper">\
            <button type="button" class="cancel-form-button">Cancel</button>\
            <button type="submit" class="save-edit-button">Save Changes</button>\
            </li>\
        </form>`;
    
        const cancelButton = document.querySelector(".cancel-form-button");
        cancelButton.addEventListener("click", () => cancelFormSubmission());
    
        const saveChangesButton = document.querySelector(".save-edit-button");
        saveChangesButton.addEventListener("click", (e) => {
            e.preventDefault();
            updateProject(project);
            renderProjectInDisplay(project);
            storeLibrary();
        });        
    }
    
     function deleteProject(project) {
        if(confirm(`Are you sure you want to delete project ${project.title}?`)) {
            projectsLibrary.removeProject(project.id);
            renderProjectsMenu(projectsLibrary);
            clearDisplay();
            storeLibrary();
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
                <li><strong>Project Description:</strong><p class="project-description-p">${project.description}<p>\</li>\
                <div class="project-display-buttons-wrapper">\
                    <button class="edit-project-button"><img src="${EditIcon}" height="17px"/>Edit Project</button>\
                    <button class="delete-project-button"><img src="${DeleteIcon}" height="17px"/>Delete Project</button>
                 </div>\ 
            </div>\
        <div class="todo-display">\
            <form action="" class="add-todo-form">\
                <input type="text" id="todo-note-input"></input>\    
                <div class="add-note-date-and-priority-wrapper">
                    <input type="date" id="note-due-date"> 
                    <select id="note-priority">\
                        <option>Low Priority</option>\
                        <option>Medium Priority</option>\
                        <option>High Priority</option>\
                    </select>\
                    <button class="add-todo-button"><h4>+ TO-DO</h4></button>\
                </div>   
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

    function storeLibrary() {
        localStorage.clear()
        let library = projectsLibrary.getLibrary();
        
        library.forEach(project => {
            let projectNotesAsJson = [];
            for (let note of project.toDoNotes) {
                let noteJson = [
                    note.getNoteContent(),
                    note.getDueDate(),
                    note.getPriority(),
                    note.getCheckedStatus()
                ];
                projectNotesAsJson.push(JSON.stringify(noteJson))
            }

            let projectJSON = [
                project.title, 
                project.description, 
                projectNotesAsJson
            ];

            localStorage.setItem(library.indexOf(project), JSON.stringify(projectJSON))
        });

        
    }

    function addToDoNote(project) {
        let noteText = document.getElementById("todo-note-input");
        let noteDueDate = document.getElementById("note-due-date");
        let notePriority = document.getElementById("note-priority");

        if (noteText.value) project.addNote(noteCreator(noteText.value, noteDueDate.value, notePriority.value));
    
        storeLibrary ()
        
        noteText.value = "";
        noteDueDate.value = "";
        notePriority.value = "Low Priority";        
    }

    function renderToDoNotes(project) {
        project.sortNotesByDate();
        const toDoNotesDisplay = document.querySelector(".todo-list");
        toDoNotesDisplay.innerHTML = "";

        let noteDeleteButtons = [];
        project.toDoNotes.forEach(noteObject => {
            toDoNotesDisplay.appendChild(noteObject.renderNote());
            noteDeleteButtons.push(noteObject.getDeleteButton());
        });
        addListenerToDeleteButtons(noteDeleteButtons, renderToDoNotes)
    };

    function renderTodayTasks() {
        makeNewProjectButtonActive();
        const todayTasks = projectsLibrary.getTodayTasks();
        const displayDiv = document.querySelector(".display");
        displayDiv.innerHTML = "";

        const todoDisplay = document.createElement("div");
        todoDisplay.className = "todo-display";
        todoDisplay.innerHTML = `<h2>${(format(new Date(), "do MMM yyyy, EEE"))}:</h2>`
        
        const toDoWrapper = document.createElement("div");
        toDoWrapper.className = "todo-list";

        let noteDeleteButtons = [];
        todayTasks.forEach(note => {
            toDoWrapper.appendChild(note.renderNote());
            noteDeleteButtons.push(note.getDeleteButton())
        });
        addListenerToDeleteButtons(noteDeleteButtons, renderTodayTasks);

        todoDisplay.appendChild(toDoWrapper)
        displayDiv.appendChild(todoDisplay)


    };

    function renderWeekTasks() {
        makeNewProjectButtonActive();
        
        const thisWeekTasks = projectsLibrary.getWeekTasks();
        
        const displayDiv = document.querySelector(".display");
        displayDiv.innerHTML = "";

        const todoDisplay = document.createElement("div");
        todoDisplay.className = "todo-display";
        todoDisplay.innerHTML = `<h2>Week ${getWeek(new Date())}:</h2>`
        
        const toDoWrapper = document.createElement("div");
        toDoWrapper.className = "todo-list";

        let noteDeleteButtons = [];
        thisWeekTasks.forEach(note => {
            toDoWrapper.appendChild(note.renderNote());
            noteDeleteButtons.push(note.getDeleteButton());
        });
        addListenerToDeleteButtons(noteDeleteButtons, renderWeekTasks);

        todoDisplay.appendChild(toDoWrapper)
        displayDiv.appendChild(todoDisplay)
    };

    function addListenerToDeleteButtons(listOfDeleteButtons, renderFunction) {
        let library = projectsLibrary.getLibrary();
        listOfDeleteButtons.forEach(button => {
            button.addEventListener("click", () => {
                library.forEach(project => {
                    project.toDoNotes.forEach(note => {
                        if(note.getDeleteButton() === button) {
                            project.removeToDoNote(note);
                            renderFunction(project);
                            storeLibrary();
                        } 
                    })
                })
            })
        })
    }

    return {createPage, getLibrary, storeLibrary}
})()


