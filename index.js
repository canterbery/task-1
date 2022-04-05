import { renderSummaryTable } from "./createSummary.js";
import { renderNoteTable } from "./createNotes.js";
import { NoteForEditId as State, noteCategories } from "./appData.js";
import { onAddClick } from "./onAddClick.js";

document.getElementById("notetable").appendChild(renderNoteTable());
document.getElementById("summary").appendChild(renderSummaryTable());

const addButton = document.getElementById("addnote");
addButton.addEventListener("click", onAddClick);

const showButton = document.getElementById("show");
showButton.addEventListener("click", () => {
  const container = document.getElementById("notetable");
  container.classList.remove("showActive");
  container.classList.add("showArchived");
});

const openModalButton = document.getElementById("modal");
openModalButton.addEventListener("click", () => {
  document.getElementById("notetype").value = 1;
  document.getElementById("notename").value = "";
  document.getElementById("notecontent").value = "";
});

const hideButton = document.getElementById("hide");
hideButton.addEventListener("click", () => {
  const container = document.getElementById("notetable");
  container.classList.remove("showArchived");
  container.classList.add("showActive");
});

const selectType = document.getElementById("notetype");
noteCategories.forEach((elem) => {
  var option = document.createElement("option");
  option.text = elem;
  selectType.add(option);
});
