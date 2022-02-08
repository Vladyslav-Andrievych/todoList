import { initHandlers } from './scripts/handlers.js';
import { renderTasks } from './scripts/renderTasks.js';
import { setItem } from './scripts/storage.js';
import { getTasks } from './scripts/tasksGateway.js';
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
