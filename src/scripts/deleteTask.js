import { renderTasks } from './renderTasks';
import { setItem } from './storage';
import { deleteTask, getTasks } from './tasksGateway';

export const onDeleteTask = (event) => {
  deleteTask(event.target.dataset.id)
    .then(() => getTasks())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
