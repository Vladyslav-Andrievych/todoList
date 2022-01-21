const baseUrl = 'https://61ea82407bc0550017bc67cb.mockapi.io/api/v1/tasks';

export const getTasks = () => {
  return fetch(baseUrl).then((response) => response.json());
};

export const createTask = (task) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(task),
  });
};

export const upDateTask = (taskId, upDatedTaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(upDatedTaskData),
  });
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
};
