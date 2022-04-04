import { renderSummaryTable } from "./createStatistic.js";
import { renderNoteTable, renderNote } from "./createNotes.js";
import {
  getNextId,
  Notes,
  NoteForEditId as State,
  noteCategories,
} from "./initialData.js";

document.getElementById("notetable").appendChild(renderNoteTable());
document.getElementById("summary").appendChild(renderSummaryTable());

const addButton = document.getElementById("addnote");
addButton.addEventListener("click", onAddClick);

const showButton = document.getElementById("show");
showButton.addEventListener("click", showArchived);

function showArchived() {
  const container = document.getElementById("notetable");
  container.classList.remove("showActive");
  container.classList.add("showArchived");
}

const hideButton = document.getElementById("hide");
hideButton.addEventListener("click", showActive);

function showActive() {
  const container = document.getElementById("notetable");
  container.classList.remove("showArchived");
  container.classList.add("showActive");
}

var x = document.getElementById("notetype");
noteCategories.forEach((elem) => {
  var option = document.createElement("option");
  option.text = elem;
  x.add(option);
});

export function onAddClick() {
  if (validateForm()) {
    const type = document.getElementById("notetype").value;
    const name = document.getElementById("notename").value;
    const content = document.getElementById("notecontent").value;

    const dates = content
      .replace(/(\r\n|\n|\r)/gm, "")
      .match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g);

    if (!!State.noteIdToEdit) {
      const id = State.noteIdToEdit;
      const note = Notes.get(id);
      State.noteIdToEdit = null;
      note.category = type;
      note.content = content;
      note.name = name;
      note.dates = dates;
      const container = document.getElementById("notes");
      container.replaceChild(renderNote(note, id), document.getElementById(id));
    } else {
      const id = getNextId();
      Notes.set(id, {
        name: name,
        created: new Date().toDateString(),
        category: type,
        content: content,
        dates: dates,
        isArchived: false,
      });
      const container = document.getElementById("notes");
      const note = Notes.get(id);
      container.appendChild(renderNote(note, id));
    }

    showStats();
    var myModalEl = document.getElementById("myModal");
    var modal = bootstrap.Modal.getInstance(myModalEl); // Returns a Bootstrap modal instance
    modal.hide();
  } else {
    alert("NO");
  }
}
function validateForm() {
  const type = document.getElementById("notetype");
  const content = document
    .getElementById("notecontent")
    .value.replace(/^\s+|\s+$/g, "");

  if (type.value == 1 || content == "") {
    window.alert("You need to choose Type");
    type.focus();
    return false;
  }
  return true;
}
