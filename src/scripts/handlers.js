import { onCreateTask } from './createTask.js';
import { onDeleteTask } from './deleteTask.js';
import { onClickCkeckbox } from './upDateTask.js';

const onListElemClick = (event) => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (isCheckbox) {
    onClickCkeckbox(event);
    return;
  }
  const isDeleteBtn = event.target.classList.contains('delete-btn');
  if (isDeleteBtn) {
    onDeleteTask(event);
    return;
  }
};

export const initHandlers = () => {
  const createTaskElem = document.querySelector('.create-task-btn');
  createTaskElem.addEventListener('click', onCreateTask);

  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', onListElemClick);
};
