export const noteCategories = [
  "Task",
  "Random Thought",
  "Idea",
  "Test Category",
];
export let curentId = 11;
export function getNextId() {
  return curentId++;
}

let NoteForEditId = {};
let Notes = new Map([
  [
    1,
    {
      Name: "Shopping List",
      Created: "May 05,2021",
      Category: "Task",
      Content: "Tomatoes,bread",
      Dates: "",
      isArchived: false,
    },
  ],
  [
    2,
    {
      Name: "The theory of evolution",
      Created: "May 15,2021",
      Category: "Random Thought",
      Content: "evolution is cool",
      Dates: "",
      isArchived: false,
    },
  ],
  [
    3,
    {
      Name: "New Feature",
      Created: "June 11,2021",
      Category: "Idea",
      Content: "implement new interesting feature till 3/5/2022",
      Dates: "3/5/2022",
      isArchived: false,
    },
  ],
  [
    4,
    {
      Name: "Books",
      Created: "December 15,2021",
      Category: "Task",
      Content: "The Lean Startup",
      Dates: "",
      isArchived: false,
    },
  ],
  [
    5,
    {
      Name: "Weather",
      Created: "July 3,2021",
      Category: "Random Thought",
      Content: "It's a really nice and sunny day!",
      Dates: "",
      isArchived: false,
    },
  ],
  [
    6,
    {
      Name: "Dishes",
      Created: "January 22,2021",
      Category: "Task",
      Content: "Time to do it",
      Dates: "",
      isArchived: false,
    },
  ],
  [
    7,
    {
      Name: "Party",
      Created: "May 2,2021",
      Category: "Idea",
      Content: "at my place 3/13/2021",
      Dates: "3/13/2021",
      isArchived: false,
    },
  ],
  [
    8,
    {
      Name: "Party",
      Created: "May 2,2021",
      Category: "Idea",
      Content: "at my place 3/13/2021",
      Dates: "3/13/2021",
      isArchived: true,
    },
  ],
  [
    9,
    {
      Name: "Party",
      Created: "May 2,2021",
      Category: "Task",
      Content: "at my place 3/13/2021",
      Dates: "3/13/2021",
      isArchived: true,
    },
  ],
  [
    10,
    {
      Name: "Party",
      Created: "May 2,2021",
      Category: "Random Thought",
      Content: "at my place 3/13/2021",
      Dates: "3/13/2021",
      isArchived: true,
    },
  ],
  [
    11,
    {
      Name: "Party",
      Created: "May 2,2021",
      Category: "Idea",
      Content: "at my place 3/13/2021",
      Dates: "3/13/2021",
      isArchived: true,
    },
  ],
]);

export { Notes, NoteForEditId };
