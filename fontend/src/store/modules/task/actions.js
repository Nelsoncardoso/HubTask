export function addTaskRequest(data) {
  return {
    type: '@task/ADD_TASK_REQUEST',
    payload: { data },
  };
}

export function addTaskRequestSuccess(task) {
  return {
    type: '@task/ADD_TASK_SUCCESS',
    payload: { task },
  };
}

export function addTaskRequestFailure() {
  return {
    type: '@task/ADD_TASK_REQUEST',
  };
}
