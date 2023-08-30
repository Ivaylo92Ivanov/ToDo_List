// Brainstorm what kind of properties your todo-items are going to have. 
// At a minimum they should have a title, description, dueDate and priority. 
// You might also want to include notes or even a checklist.


export const createNewProject = (data) => {
    let title = data[0];
    let priority = data[1];
    let dueDate = data[2];
    let description = data[3];
    console.log(title + " " + priority + " " + dueDate + " " + description)
    return {title, priority, dueDate, description}
}

export function getNewProjectFormData () {
    const title = document.getElementById("title").value;
    const priority = document.getElementById("priority").value;
    const dueDate = document.getElementById("date").value;
    const description = document.getElementById("description").value;
    return [title, priority, dueDate, description]
}


