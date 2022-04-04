import { Notes, NoteForEditId } from "./initialData.js";
import { showStats } from "./createStatistic.js";

export function createBootstrapSecondaryButton(value) {
  let button = document.createElement("button");
  button.classList.add("btn");
  button.classList.add("btn-secondary");
  button.setAttribute("type", "button");
  button.innerHTML = value;
  return button;
}
export function createBootstrapTableColumn(value) {
  let col = document.createElement("div");
  col.classList.add("col");
  col.classList.add("note");
  col.classList.add("text-truncate");
  col.innerHTML = value;
  return col;
}

export function createBootstrapButtonGroup() {
  let group = document.createElement("div");
  group.classList.add("btn-group");
  group.setAttribute("role", "group");
  return group;
}

export function createButtonGroup(notes, key) {
  let note = notes.get(key);
  let group = createBootstrapButtonGroup();

  const editButton = createBootstrapSecondaryButton(
    '<i class="icon-edit"></i>'
  );
  editButton.setAttribute("data-bs-target", "#myModal");
  editButton.setAttribute("data-bs-toggle", "modal");
  editButton.addEventListener("click", (e) => startEditNote(key, note));

  const deleteButton = createBootstrapSecondaryButton(
    '<i class="icon-trash"></i>'
  );
  deleteButton.addEventListener("click", (e) => {
    Notes.delete(key);
    document.getElementById(key).remove();
    showStats();
  });

  const archiveButton = createBootstrapSecondaryButton(
    '<i class="icon-calendar-empty"></i>'
  );
  archiveButton.classList.add("archive");
  archiveButton.addEventListener("click", (e) => {
    note.isArchived = true;
    let row = document.getElementById(key);
    row.classList.remove("active");
    row.classList.add("archived");
    showStats();
  });

  const restoreButton = createBootstrapSecondaryButton(
    '<i class="icon-calendar">'
  );
  restoreButton.classList.add("restore");
  restoreButton.addEventListener("click", (e) => {
    note.isArchived = false;
    let row = document.getElementById(key);
    row.classList.remove("archived");
    row.classList.add("active");
    showStats();
  });

  const buttons = [editButton, archiveButton, restoreButton, deleteButton];
  for (let button of buttons) {
    group.appendChild(button);
  }
  return group;
}

function startEditNote(key, note) {
  NoteForEditId.noteIdToEdit = key;
  document.getElementById("notetype").value = note.Category;
  document.getElementById("notename").value = note.Name;
  document.getElementById("notecontent").value = note.Content;
}
