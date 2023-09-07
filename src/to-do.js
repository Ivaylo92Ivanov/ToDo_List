// Brainstorm what kind of properties your todo-items are going to have. 
// At a minimum they should have a title, description, dueDate and priority. 
// You might also want to include notes or even a checklist.

export const projectsLibraryCreator = () => {
    const library = [];
    const addProject = (project) => library.push(project);
    const removeProject = (projectIndex) => library.splice(projectIndex, 1);
    const getLibrary = () => library;
    return { addProject, removeProject, getLibrary}
}

export function getProjectFormData() {
    const title = document.getElementById("title").value;
    const priority = document.getElementById("priority").value;
    const dueDate = document.getElementById("date").value;
    const description = document.getElementById("description").value;
    return [title, priority, dueDate, description]
}

export const noteCreator = (content) => {
    let noteContent = content;

    const renderNote = () => {
        const toDoNoteDiv = document.createElement("div");
        toDoNoteDiv.className = "todo-note";



        // create the note display
        const noteDisplayDiv = document.createElement("div");

        const noteCheckbox = document.createElement("input");
        noteCheckbox.type = "checkbox";
        noteDisplayDiv.appendChild(noteCheckbox);

        const noteTextField = document.createElement("p");
        noteTextField.textContent = noteContent;
        noteDisplayDiv.appendChild(noteTextField);

        const buttonsWrapper = document.createElement("div");
        buttonsWrapper.className = ("note-buttons-wrapper");

        const editButton = document.createElement("button");
        editButton.className = "todo-edit-button";
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => editNote(noteDisplayDiv, noteEditDiv, noteTextField, noteEditField));

        const deleteButton = document.createElement("button");
        deleteButton.className = "todo-delete-button";
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", () => console.log(noteContent));
        
        buttonsWrapper.appendChild(editButton);
        buttonsWrapper.appendChild(deleteButton);
        noteDisplayDiv.appendChild(buttonsWrapper);

        toDoNoteDiv.appendChild(noteDisplayDiv)



        // create the edit note display
        const noteEditDiv = document.createElement("div");
        noteEditDiv.style.display = "none";

        const noteEditField = document.createElement("input");
        noteEditField.type = "text";
        noteEditDiv.appendChild(noteEditField);

        const saveEditButton = document.createElement("button");
        saveEditButton.textContent = "Save"
        saveEditButton.className = "save-note-edit-button"
        saveEditButton.addEventListener("click", (e) => {
            e.preventDefault();
        });

        const cancelEditButton = document.createElement("button");
        cancelEditButton.className = "cancel-note-edit-button";
        cancelEditButton.textContent = "X";
        cancelEditButton.addEventListener("click", (e) => {
            e.preventDefault();
            noteDisplayDiv.style.display = "flex";
            noteEditDiv.style.display = "none";
        });
        
        const noteButtonsWrapper = document.createElement("div");
        noteButtonsWrapper.className = "note-edit-buttons-wrapper";

        noteButtonsWrapper.appendChild(saveEditButton);
        noteButtonsWrapper.appendChild(cancelEditButton);
        
        noteEditDiv.appendChild(noteButtonsWrapper);
        toDoNoteDiv.appendChild(noteEditDiv);

        return toDoNoteDiv        
    };
    
    const editNote = (noteDisplayDiv, noteEditDiv, noteTextField, noteEditField) => {
        let noteCurrentText = noteTextField.textContent 
        noteDisplayDiv.style.display = "none";
        console.log(noteDisplayDiv)
        
        noteEditField.value = noteCurrentText;
        noteEditDiv.style.display = "flex";
    }

    return {noteContent, renderNote, editNote}
    
}

export const projectsCreator = (formInput) => {
    let title = formInput[0];
    let priority = formInput[1];
    let dueDate = formInput[2];
    let description = formInput[3];
    let toDoNotes = [];
    const addToDoNote = (note) => toDoNotes.push(note);
    const removeToDoNote = (note) => toDoNotes.splice(toDoNotes.indexOf(note), 1);
    return {title, priority, dueDate, description, toDoNotes, addToDoNote, removeToDoNote}
}

export function updateProject(project) {
    [project.title, project.priority, project.dueDate, project.description] = getProjectFormData();
    const projectElement = document.querySelector(`[data-id="${project.id}"]`);
    if (!project.title) project.title="Default Project";
    projectElement.textContent = project.title;
}


// const renderNote = () => {
//     const toDoNoteDiv = document.createElement("div");
//     toDoNoteDiv.className = "todo-note";

//     const noteDisplay = document.createElement("div");

//     const noteCheckbox = document.createElement("input");
//     noteCheckbox.type = "checkbox";
//     toDoNoteDiv.appendChild(noteCheckbox);



//     const noteEditField = document.createElement("input");
//     noteEditField.type = "text";
//     noteEditField.classList.add("hidden");
//     toDoNoteDiv.appendChild(noteEditField);

//     const noteTextField = document.createElement("p");
//     noteTextField.textContent = noteContent;
//     toDoNoteDiv.appendChild(noteTextField);

//     const buttonsWrapper = document.createElement("div");
//     buttonsWrapper.className = ("note-buttons-wrapper");

//     const editButton = document.createElement("button");
//     editButton.className = "todo-edit-button";
//     editButton.textContent = "Edit";
//     editButton.addEventListener("click", () => editNote(noteTextField, noteEditField));

//     const deleteButton = document.createElement("button");
//     deleteButton.className = "todo-delete-button";
//     deleteButton.textContent = "X";
//     deleteButton.addEventListener("click", () => console.log(noteContent));
    
//     buttonsWrapper.appendChild(editButton);
//     buttonsWrapper.appendChild(deleteButton);
//     toDoNoteDiv.appendChild(buttonsWrapper);

//     return toDoNoteDiv        