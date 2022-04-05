import { Notes, NoteForEditId } from "./appData.js";
import { renderSummaryTable } from "./createSummary.js";

export function createBootstrapSecondaryButton(value) {
  let button = document.createElement("button");
  button.classList.add("btn");
  button.classList.add("btn-secondary");
  button.setAttribute("type", "button");
  button.innerHTML = value;
  return button;
}

export function createBootstrapButtonGroup() {
  let group = document.createElement("div");
  group.classList.add("btn-group");
  group.setAttribute("role", "group");
  return group;
}

export function createButtonGroup(note, key) {
  let group = createBootstrapButtonGroup();

  const editButton = createBootstrapSecondaryButton(
    '<i class="icon-edit"></i>'
  );
  editButton.setAttribute("data-bs-target", "#myModal");
  editButton.setAttribute("data-bs-toggle", "modal");

  addTooltip(editButton, "Edit");
  editButton.addEventListener("click", () => {
    NoteForEditId.noteIdToEdit = key;
    document.getElementById("notetype").value = note.category;
    document.getElementById("notename").value = note.name;
    document.getElementById("notecontent").value = note.content;
  });

  const deleteButton = createBootstrapSecondaryButton(
    '<i class="icon-trash"></i>'
  );

  addTooltip(deleteButton, "Delete");

  deleteButton.addEventListener("click", () => {
    Notes.delete(key);
    document.getElementById(key).remove();
    document
      .getElementById("summary")
      .replaceChild(renderSummaryTable(), document.getElementById("statistic"));
  });

  const archiveButton = createBootstrapSecondaryButton(
    '<i class="icon-calendar-empty"></i>'
  );
  archiveButton.classList.add("archive");

  addTooltip(archiveButton, "Archivate");

  archiveButton.addEventListener("click", () => {
    note.isArchived = true;
    let row = document.getElementById(key);
    row.classList.remove("active");
    row.classList.add("archived");
    document
      .getElementById("summary")
      .replaceChild(renderSummaryTable(), document.getElementById("statistic"));
  });

  const restoreButton = createBootstrapSecondaryButton(
    '<i class="icon-calendar">'
  );
  restoreButton.classList.add("restore");
  addTooltip(restoreButton, "Restore");

  restoreButton.addEventListener("click", () => {
    note.isArchived = false;
    let row = document.getElementById(key);
    row.classList.remove("archived");
    row.classList.add("active");
    document
      .getElementById("summary")
      .replaceChild(renderSummaryTable(), document.getElementById("statistic"));
  });

  const buttons = [editButton, archiveButton, restoreButton, deleteButton];
  for (let button of buttons) {
    group.appendChild(button);
  }
  return group;
}

function addTooltip(button, tooltip) {
  button.setAttribute("data-toggle", "tooltip");
  button.setAttribute("data-placement", "top");
  button.setAttribute("title", tooltip);
}
