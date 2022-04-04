import { showStats } from "./createStatistic.js";
import { showNotes } from "./createNotes.js";
import {
  getNextId,
  Notes,
  NoteForEditId as State,
  noteCategories,
  curentId,
} from "./initialData.js";

showNotes();
showStats();

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

export function onAddClick(e) {
  console.log("onclick");
  const type = document.getElementById("notetype").value;
  const name = document.getElementById("notename").value;
  const content = document.getElementById("notecontent").value;

  const dates = content
    .replace(/(\r\n|\n|\r)/gm, "")
    .match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g);
  console.log(content);
  console.log(dates);
  if (!!State.noteIdToEdit) {
    const note = Notes.get(State.noteIdToEdit);
    State.noteIdToEdit = null;
    note.Category = type;
    note.Content = content;
    note.Name = name;
    note.Dates = dates;
  } else {
    const id = getNextId();
    Notes.set(id, {
      Name: name,
      Created: new Date().toDateString(),
      Category: type,
      Content: content,
      Dates: dates,
      isArchived: false,
    });
  }
  showNotes();
  showStats();
}
