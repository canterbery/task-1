import { Notes } from "./appData.js";
import { createButtonGroup } from "./buttons.js";

export function renderNoteTable() {
  let container = document.createElement("tbody");
  container.setAttribute("id", "notes");

  Notes.forEach((value, key) => {
    let row = renderNote(value, key, container);
    container.appendChild(row);
  });
  return container;
}

export function renderNote(note, id) {
  let row = document.createElement("tr");

  row.setAttribute("id", id);
  row.classList.add(note.isArchived ? "archived" : "active");
  const { isArchived, ...filteredvalue } = note;
  for (const key in filteredvalue) {
    let col = document.createElement("td");
    col.innerHTML = note[key];
    row.appendChild(col);
  }
  let col = document.createElement("td");
  row.appendChild(col);
  col.appendChild(createButtonGroup(note, id));
  return row;
}
