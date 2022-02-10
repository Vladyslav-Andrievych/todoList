import { getItem } from './storage';
import './list.scss';

export const renderTasks = () => {
  const listElem = document.querySelector('.list');
  listElem.innerHTML = '';

  const tasksList = getItem('tasksList') || [];

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      checkbox.dataset.id = id;
      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      const textElem = document.createElement('span');
      textElem.textContent = text;
      textElem.classList.add('list__item-text');

      const deleteTaskBtn = document.createElement('button');
      deleteTaskBtn.classList.add('delete-btn');
      deleteTaskBtn.classList.add('btn');
      deleteTaskBtn.dataset.id = id;

      listItemElem.append(checkbox, textElem, deleteTaskBtn);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};
