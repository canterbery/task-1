export const noteCategories = ["Task", "Random Thought", "Idea"];
export let curentId = 11;
export function getNextId() {
  return ++curentId;
}

let NoteForEditId = {};
let Notes = new Map([
  [
    1,
    {
      name: "Shopping List",
      created: "May 05,2021",
      category: "Task",
      content: "Tomatoes,bread",
      dates: "",
      isArchived: false,
    },
  ],
  [
    2,
    {
      name: "The theory of evolution",
      created: "May 15,2021",
      category: "Random Thought",
      content: "evolution is cool",
      dates: "",
      isArchived: false,
    },
  ],
  [
    3,
    {
      name: "New Feature",
      created: "June 11,2021",
      category: "Idea",
      content: "implement new interesting feature till 3/5/2022",
      dates: "3/5/2022",
      isArchived: false,
    },
  ],
  [
    4,
    {
      name: "Books",
      created: "December 15,2021",
      category: "Task",
      content: "The Lean Startup",
      dates: "",
      isArchived: false,
    },
  ],
  [
    5,
    {
      name: "Weather",
      created: "July 3,2021",
      category: "Random Thought",
      content: "It's a really nice and sunny day!",
      dates: "",
      isArchived: false,
    },
  ],
  [
    6,
    {
      name: "Dishes",
      created: "January 22,2021",
      category: "Task",
      content: "Time to do it",
      dates: "",
      isArchived: false,
    },
  ],
  [
    7,
    {
      name: "Party",
      created: "May 2,2021",
      category: "Idea",
      content: "at my place 3/13/2021",
      dates: "3/13/2021",
      isArchived: false,
    },
  ],
  [
    8,
    {
      name: "Party",
      created: "May 2,2021",
      category: "Idea",
      content: "at my place 3/13/2021",
      cates: "3/13/2021",
      isArchived: true,
    },
  ],
  [
    9,
    {
      name: "Party",
      created: "May 2,2021",
      category: "Task",
      content: "at my place 3/13/2021",
      dates: "3/13/2021",
      isArchived: true,
    },
  ],
  [
    10,
    {
      name: "Party",
      created: "May 2,2021",
      category: "Random Thought",
      content: "at my place 3/13/2021",
      dates: "3/13/2021",
      isArchived: true,
    },
  ],
  [
    11,
    {
      name: "Party",
      created: "May 2,2021",
      category: "Idea",
      content: "at my place 3/13/2021",
      dates: "3/13/2021",
      isArchived: true,
    },
  ],
]);

export { Notes, NoteForEditId };
