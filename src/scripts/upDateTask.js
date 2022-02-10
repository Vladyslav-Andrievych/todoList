import { renderTasks } from './renderTasks';
import { setItem, getItem } from './storage';
import { getTasks, upDateTask } from './tasksGateway';

export const onClickCkeckbox = (event) => {
  const { id } = event.target.dataset;
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
