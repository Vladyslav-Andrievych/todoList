import { renderTasks } from './renderTasks.js';
import { setItem } from './storage.js';
import { deleteTask, getTasks } from './tasksGateway.js';

export const onDeleteTask = (event) => {
  deleteTask(event.target.dataset.id)
    .then(() => getTasks())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
