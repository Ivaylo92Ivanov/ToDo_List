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
    let isChecked = false;

    const renderNote = () => {

        const toDoNoteDiv = document.createElement("div");
        toDoNoteDiv.className = "todo-note";

        // create the note display
        const noteDisplayDiv = document.createElement("div");

        const noteCheckbox = document.createElement("input");
        noteCheckbox.type = "checkbox";
        noteCheckbox.checked = isChecked;
        noteCheckbox.addEventListener('change', () => {
            if (isChecked) {
                noteText.classList.remove("checked");
                isChecked = false;
                noteCheckbox.checked = isChecked;
            } else {
                noteText.classList.add("checked");
                isChecked = true;
                noteCheckbox.checked = isChecked;
            }
        });
        noteDisplayDiv.appendChild(noteCheckbox);

        const noteText = document.createElement("p");
        noteText.textContent = noteContent;
        if (isChecked) noteText.classList.add("checked");
        noteDisplayDiv.appendChild(noteText);

        const buttonsWrapper = document.createElement("div");
        buttonsWrapper.className = ("note-buttons-wrapper");

        const editButton = document.createElement("button");
        editButton.className = "todo-edit-button";
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => renderEditMenu(noteDisplayDiv, noteEditDiv, noteText, noteEditField));

        const deleteButton = document.createElement("button");
        deleteButton.className = "todo-delete-button";
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", () => console.log(noteContent));
        
        buttonsWrapper.appendChild(editButton);
        buttonsWrapper.appendChild(deleteButton);
        noteDisplayDiv.appendChild(buttonsWrapper);

        toDoNoteDiv.appendChild(noteDisplayDiv)

        // create the edit note display and set its display to none
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
            editNote(noteText, noteEditField.value);
            noteEditDiv.style.display = "none";
            noteDisplayDiv.style.display = "flex";   
        });

        const cancelEditButton = document.createElement("button");
        cancelEditButton.className = "cancel-note-edit-button";
        cancelEditButton.textContent = "X";
        cancelEditButton.addEventListener("click", (e) => {
            e.preventDefault();
            noteEditDiv.style.display = "none";
            noteDisplayDiv.style.display = "flex";
        });
        
        const noteButtonsWrapper = document.createElement("div");
        noteButtonsWrapper.className = "note-buttons-wrapper";

        noteButtonsWrapper.appendChild(saveEditButton);
        noteButtonsWrapper.appendChild(cancelEditButton);
        
        noteEditDiv.appendChild(noteButtonsWrapper);
        toDoNoteDiv.appendChild(noteEditDiv);

        return toDoNoteDiv;        
    };
    
    const renderEditMenu = (noteDisplayDiv, noteEditDiv, noteText, noteEditField) => {
        let noteCurrentText = noteText.textContent 
        noteEditField.value = noteCurrentText;
        noteDisplayDiv.style.display = "none";
        noteEditDiv.style.display = "flex";
    };

    const editNote = (textHolder, newText) => {
        textHolder.textContent = newText;
        noteContent = newText;
    };


    return {noteContent, renderNote, renderEditMenu}
    
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

