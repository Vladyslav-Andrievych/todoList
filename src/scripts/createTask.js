import { renderTasks } from './renderTasks.js';
import { setItem, getItem } from './storage.js';
import { createTask, getTasks } from './tasksGateway.js';

export function counter() {
  let count = 5;

  return function () {
    count += 1;
    return count;
  };
}

const createId = counter();

export const onCreateTask = (event) => {
  const taskInputElem = document.querySelector('.task-input');

  const text = taskInputElem.value;
  if (!text) {
    return;
  }
  taskInputElem.value = '';

  const id = createId();

  const newTask = {
    id,
    text,
    done: false,
  };

  createTask(newTask)
    .then(() => getTasks())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
