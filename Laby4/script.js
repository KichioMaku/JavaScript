const addNote = document.querySelector(".add_note");
const addNotePopup = document.querySelector(".popup_form");
const closePopupButton = addNotePopup.querySelector("header i");
const addNoteButton = addNotePopup.querySelector("button");
const noteTitle = addNotePopup.querySelector("input");
const noteText = addNotePopup.querySelector("textarea");
const noteColor = addNotePopup.querySelector(".color_selector input");
const notes = JSON.parse(localStorage.getItem("notes") || "[]");
const noteTemplate = document.querySelector(".note_keeper .note");
const updateTitle = document.querySelector(".popup .content header p")
noteColor.value = "#d7d014";
showAllNotes();

let isUpdate = false, updateId;


addNote.addEventListener("click", () =>{
    noteTitle.focus();
    addNotePopup.classList.add("show");
});

closePopupButton.addEventListener("click", () =>{
    isUpdate = false;
    noteTitle.value = "";
    noteText.value = "";
    addNotePopup.classList.remove("show");
    updateTitle.innerText = "Add note";
    addNoteButton.innerText = "Create note";
});

addNoteButton.addEventListener("click", e =>{
    e.preventDefault();
    let title = noteTitle.value;
    let text = noteText.value;
    let color = noteColor.value;
    let pined = false;
    
    let finalDate = new Date().toISOString().substring(0,10).replaceAll('-','.');
    if(title || text)
    {
        let note = {
            title: title, text: text, color:color, date: finalDate, isPinned: pined 
        }
        if(!isUpdate){
            notes.push(note);
        }
        else{
            isUpdate = false;
            notes[updateId] = note;
        }

        localStorage.setItem("notes", JSON.stringify(notes));
        closePopupButton.click();
        showAllNotes();
    };
});


function showAllNotes(){
    document.querySelectorAll(".note").forEach(note => note.remove());
    notes.forEach((note, index) => {
        let liTag = ` <li class="note" style="background-color: ${note.color};">
                    <div class="note_details">
                        <p>${note.title}</p>
                        <span>${note.text}</span>
                    </div>
                    <div class="bottom_content">
                        <div class="note_date">
                            <span>${note.date}</span>
                        </div>
                        <div class="ellipsis_icon">
                            <i onclick="showOptions(this)" class="uil uil-ellipsis-h"></i>
                            <ul class="menu">
                                <li onclick="updateNote(${index}, '${note.title}', '${note.text}')"><i class="uil uil-pen">Edit</i></li>
                                <li onclick="deleteNote(${index})"><i class="uil uil-pen"></i>Delete</li>
                                <li onclick="pinNote(${index})"><i class="uil uil-pen"></i>Pin</li>
                            </ul>
                        </div>
                    </div>
            </li>`;
            addNote.insertAdjacentHTML("afterend", liTag);
    });
};

function showOptions(elem){
    elem.parentElement.classList.add("show");
    document.addEventListener("click", e => {
        if(e.target.tagName != "I" || e.target != elem)
        {
            elem.parentElement.classList.remove("show");
        }
    });
};
function deleteNote(id){
    notes.splice(id, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    showAllNotes();
};

function updateNote(id,title,text){
    isUpdate = true;
    updateId = id;
    addNote.click();
    noteTitle.value = title;
    noteText.value = text;
    addNoteButton.innerText = "Update";
    updateTitle.innerText = "Update your note";
    console.log(title,text);
};

function pinNote(id){
    console.log(notes);
    notes.forEach((note, index) => {
        index++;
    });
    id = 0;
    console.log(notes);
    showAllNotes();
};