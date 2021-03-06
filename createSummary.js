import { Notes, noteCategories } from "./appData.js";

function getSummaryStats() {
  let data = {};
  noteCategories.forEach((elem) => {
    data[elem] = [0, 0];
  });

  Notes.forEach((elem) => {
    let cur = data[elem.category];
    elem.isArchived ? cur[1]++ : cur[0]++;
  });
  return data;
}

export function renderSummaryTable() {
  const data = getSummaryStats();

  let statistic = document.createElement("tbody");
  statistic.setAttribute("id", "statistic");

  for (const key in data) {
    let row = document.createElement("tr");
    statistic.appendChild(row);
    row.appendChild(createCol(key));
    row.appendChild(createCol(data[key][0]));
    row.appendChild(createCol(data[key][1]));
  }

  function createCol(value) {
    let col = document.createElement("td");
    col.innerHTML = value;
    return col;
  }

  return statistic;
}
