let id = 0;

export function addTask(text, completed = false) {
  return {
    id: id++,
    text,
    done: completed,
  };
}
export const myTasks = [
  addTask("Learn React", false),
  addTask("Learn JSX", false),
  addTask("Learn Hooks", false),
];
