import { renderSummaryTable } from "./createSummary.js";
import { renderNote } from "./createNotes.js";
import { getNextId, Notes, NoteForEditId as State } from "./appData.js";

export function onAddClick() {
  if (validateType()) {
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

    document
      .getElementById("summary")
      .replaceChild(renderSummaryTable(), document.getElementById("statistic"));

    var myModalEl = document.getElementById("myModal");
    var modal = bootstrap.Modal.getInstance(myModalEl); // Returns a Bootstrap modal instance
    modal.hide();
  }
}

function validateType() {
  const type = document.getElementById("notetype");
  if (type.value == 1) {
    window.alert("You need to choose Note Type");
    type.focus();
    return false;
  }
  return true;
}
