export function clearDisplay() {
    const display = document.querySelector('.display');
    display.innerHTML = "";
}

export function popFormUp() {
    const display = document.querySelector('.display');
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
    };

export function renderProjects(projectsList) {
    const projectsDiv = document.querySelector(".projects-div");
    projectsDiv.innerHTML = "";

    projectsList.forEach(currentProject => {
        let projectInstance = document.createElement("button");
        projectInstance.className = "project-instance";
        if (!currentProject.title) currentProject.title="Default Project";
        projectInstance.textContent = currentProject.title;
        projectsDiv.appendChild(projectInstance);
    });
    
}

