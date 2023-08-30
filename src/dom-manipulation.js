export function clearDisplay() {
    const display = document.querySelector('.display');
    display.innerHTML = "";
}

export function displayNewProjectForm() {
    const display = document.querySelector('.display');
    const newProjectButton = document.querySelector(".new-project-button");
    // work on row 60 from index js
    console.log(newProjectButton.classList)
    if (newProjectButton.classList.contains("clicked")) {
        console.log("bug here")
        return
    } else {
        display.innerHTML ='<form action="" class="new-project-form">\
            <h1>Create New Project</h1>\
                                    <li><label for="title">Project Title:</label></li>\
                                    <li><input type="text" id="title" required></li>\
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
                                    <li><button type="submit" class="submit-button">Create Project</button></li>\
                            </form>';
    }
};

export function showProjectsInNav(projectsList) {
    const projectsDiv = document.querySelector(".projects-div");
    projectsDiv.innerHTML = "";

    projectsList.forEach(currentProject => {
        let projectNavTitle = document.createElement("button");
        projectNavTitle.className = "project-nav-title";
        if (!currentProject.title) currentProject.title="Default Project";
        projectNavTitle.textContent = currentProject.title;
        projectsDiv.appendChild(projectNavTitle);
    });

    addEventListenerToProjectTitles();
}


// logic should link the projectObjects to the Dom Element
function addEventListenerToProjectTitles() {
    let projectsTitlesList = document.querySelectorAll(".project-nav-title");
    projectsTitlesList.forEach(project => {
        project.addEventListener("click", () => {renderProjectInDisplay(project)});
    })
}

export function renderProjectInDisplay(project) {
    // const displayDiv = document.querySelector(".display");
    console.log(project.textContent)
   


}

