import { initHandlers } from './handlers.js';
import { renderTasks } from './renderTasks.js';
import { setItem } from './storage.js';
import { getTasks } from './tasksGateway.js';

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
