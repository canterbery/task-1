import { Notes } from "./initialData.js";
import { createButtonGroup } from "./UI.js";

export function showNotes() {
  const exists = document.getElementById("notes");
  if (exists) {
    exists.remove();
  }

  let container = document.createElement("tbody");

  container.setAttribute("id", "notes");

  Notes.forEach((value, key) => {
    let row = document.createElement("tr");
    container.appendChild(row);
    row.setAttribute("id", key);
    row.classList.add(value.isArchived ? "archived" : "active");

    const { isArchived, ...filteredvalue } = value;

    for (const key in filteredvalue) {
      let col = document.createElement("td");
      col.innerHTML = value[key];
      row.appendChild(col);
    }
    let col = document.createElement("td");

    row.appendChild(col);
    col.appendChild(createButtonGroup(Notes, key));
  });

  document.getElementById("notetable").appendChild(container);
}
