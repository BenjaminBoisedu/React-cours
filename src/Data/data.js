export const myTasks = [
  {
    id: 1,
    name: "Learn React",
    done: false,
  },
  {
    id: 2,
    name: "Learn Gsap",
    done: false,
  },
  {
    id: 3,
    name: "Learn Vue",
    done: false,
  },
];

export function addTask(name) {
  myTasks.push({ id: myTasks.length + 1, name: name, done: false });
}
