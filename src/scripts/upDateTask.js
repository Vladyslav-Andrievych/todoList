import { renderTasks } from './renderTasks.js';
import { setItem, getItem } from './storage.js';
import { getTasks, upDateTask } from './tasksGateway.js';

export const onClickCkeckbox = (event) => {
  const id = event.target.dataset.id;
  const tasksList = getItem('tasksList');
  const { text } = tasksList.find((task) => task.id === id);
  const done = event.target.checked;
  const updatedTask = {
    text,
    id,
    done,
  };

  upDateTask(id, updatedTask)
    .then(() => getTasks())
    .then((updatedTasks) => {
      setItem('tasksList', updatedTasks);
      renderTasks();
    });
};
