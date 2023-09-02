// Brainstorm what kind of properties your todo-items are going to have. 
// At a minimum they should have a title, description, dueDate and priority. 
// You might also want to include notes or even a checklist.

export function getProjectFormData() {
    const title = document.getElementById("title").value;
    const priority = document.getElementById("priority").value;
    const dueDate = document.getElementById("date").value;
    const description = document.getElementById("description").value;
    return [title, priority, dueDate, description]
}

export const createNewProject = (formInput) => {
    let title = formInput[0];
    let priority = formInput[1];
    let dueDate = formInput[2];
    let description = formInput[3];
    return {title, priority, dueDate, description}
}

export function updateProject(project) {
    [project.title, project.priority, project.dueDate, project.description] = getProjectFormData();
    const projectElement = document.querySelector(`[data-id="${project.id}"]`);
    if (!project.title) project.title="Default Project";
    projectElement.textContent = project.title;
}