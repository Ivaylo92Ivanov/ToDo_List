import { isToday, isThisWeek } from 'date-fns';
import { domManipulator } from './dom-manipulation';

export const projectsLibraryCreator = () => {
    const library = [];
    const addProject = (project) => library.push(project);
    const removeProject = (projectIndex) => library.splice(projectIndex, 1);
    const getLibrary = () => library;
    const getTodayTasks = () => {
        const todayTasks = []
        library.forEach(project => {
            project.toDoNotes.forEach(note => {
                if (isToday(new Date(note.getDueDate()))) todayTasks.push(note);
            });
        });
        return todayTasks
    };

    const getWeekTasks = () => {
        let thisWeekTasks = [];
        library.forEach(project => {
            project.toDoNotes.forEach(note => {
                if (isThisWeek(new Date(note.getDueDate()))) thisWeekTasks.push(note);
            });
        });

        //sort this week tasks by date
        
        thisWeekTasks.sort(compareNotesByDate);
        
        return thisWeekTasks
    };

    return { getLibrary, addProject, removeProject, getTodayTasks, getWeekTasks}
}


export function getProjectFormData() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    return [title,  description]
}

export const projectsCreator = (formInput) => {
    let title = formInput[0];
    let description = formInput[1];
    let toDoNotes = [];
    const addNote = (note) => {
        toDoNotes.push(note);
    }
    const removeToDoNote = (note) => {
        if(toDoNotes.includes(note))toDoNotes.splice(toDoNotes.indexOf(note), 1);
    }
    const sortNotesByDate = () => toDoNotes.sort(compareNotesByDate);
    
    return {title, description, toDoNotes, addNote, removeToDoNote, sortNotesByDate}
}

export function updateProject(project) {
    [project.title, project.description] = getProjectFormData();
    const projectElement = document.querySelector(`[data-id="${project.id}"]`);
    if (!project.title) project.title="Default Project";
    projectElement.textContent = project.title;
}

export const noteCreator = (content, dueDate, priority) => {
    let noteContent = content;
    let noteDueDate = dueDate;
    let notePriority = priority;
    let isChecked = false;
    let deleteButton;

    const setCheckedStatus = (status) => isChecked = status;

    const getDeleteButton = () => deleteButton;

    const setDeleteButton = (button) => deleteButton = button;

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
            domManipulator.storeLibrary();
        });

        noteDisplayDiv.appendChild(noteCheckbox);

        const noteText = document.createElement("p");
        noteText.textContent = noteContent;
        if (isChecked) noteText.classList.add("checked");
        noteDisplayDiv.appendChild(noteText);

        const dateAndPriorityWrapper = document.createElement("div");
        dateAndPriorityWrapper.className = "note-date-and-priority-wrapper"

        const noteDueDateEl = document.createElement("p");
        noteDueDateEl.textContent = noteDueDate;
        dateAndPriorityWrapper.appendChild(noteDueDateEl);

        const notePriorityEl = document.createElement("p");
        notePriorityEl.textContent = notePriority;
        dateAndPriorityWrapper.appendChild(notePriorityEl);

        noteDisplayDiv.appendChild(dateAndPriorityWrapper)

        const buttonsWrapper = document.createElement("div");
        buttonsWrapper.className = "note-buttons-wrapper";

        const editButton = document.createElement("button");
        editButton.className = "todo-edit-button";
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => renderEditMenu(noteDisplayDiv, noteEditDiv, noteText, noteTextEditField));

        const deleteButton = document.createElement("button");
        deleteButton.className = "todo-delete-button";
        deleteButton.textContent = "X";
        setDeleteButton(deleteButton);
        
        buttonsWrapper.appendChild(editButton);
        buttonsWrapper.appendChild(deleteButton);
        noteDisplayDiv.appendChild(buttonsWrapper);

        toDoNoteDiv.appendChild(noteDisplayDiv)

        // create the edit note display 
        // and set its display to none
        const noteEditDiv = document.createElement("div");
        noteEditDiv.className = "note-edit-div"
        noteEditDiv.style.display = "none";

        const noteTextEditField = document.createElement("input");
        noteTextEditField.type = "text";
        noteEditDiv.appendChild(noteTextEditField);

        const noteDateEditField = document.createElement("input");
        noteDateEditField.type = "date";
        noteDateEditField.value = noteDueDate;
        noteEditDiv.appendChild(noteDateEditField);

        const notePriorityEditField = document.createElement("select");
        const options = ["Low Priority", "Medium Priority", "High Priority"];
        for (let option of options) {
            let currentOption = document.createElement("option");
            currentOption.textContent = option;
            if (option == notePriority) currentOption.setAttribute("selected", "selected");
            notePriorityEditField.appendChild(currentOption);
        };
        noteEditDiv.appendChild(notePriorityEditField);

        const saveEditButton = document.createElement("button");
        saveEditButton.textContent = "Save";
        saveEditButton.className = "save-note-edit-button";
        saveEditButton.addEventListener("click", (e) => {
            e.preventDefault();
            editNote(noteText, noteTextEditField.value,
                    noteDueDateEl, noteDateEditField.value,
                    notePriorityEl, notePriorityEditField.value);
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

    const editNote = (
        textHolder, newText, 
        dateHolder, newDate, 
        priorityHolder, newPriority
        ) => {
        noteContent = newText;
        noteDueDate = newDate;
        notePriority = newPriority;

        textHolder.textContent = noteContent;
        dateHolder.textContent = noteDueDate;
        priorityHolder.textContent = notePriority;

        domManipulator.storeLibrary();
    };

    const getNoteContent = () => noteContent;
    const getDueDate = () => noteDueDate;
    const getPriority = () => notePriority;
    const getCheckedStatus = () => isChecked;


    return { 
        renderNote, renderEditMenu, getDeleteButton, 
        getNoteContent, getDueDate, getPriority, getCheckedStatus,
        setCheckedStatus
    }

}

function compareNotesByDate(a,b) {
    if (!a.getDueDate()) return -1;
    if (new Date(a.getDueDate()) < new Date(b.getDueDate())) {
        return -1;
    } 
    if (new Date(a.getDueDate()) > new Date(b.getDueDate())) {
        return 1;
    } 
    return 0;
}