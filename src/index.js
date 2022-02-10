import { initHandlers } from './scripts/handlers';
import { renderTasks } from './scripts/renderTasks';
import { setItem } from './scripts/storage';
import { getTasks } from './scripts/tasksGateway';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  initHandlers();
  getTasks().then((tasksList) => {
    setItem('tasksList', tasksList);
    renderTasks();
  });
});

const onStorageChange = () => {
  renderTasks();
};

window.addEventListener('storage', onStorageChange);
