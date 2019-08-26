import produce from 'immer';

const INITIAL_STATE = {
  task: null,
};

export default function task(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@task/ADD_TASK_SUCCESS': {
        draft.task = action.payload.task;
        break;
      }

      default:
    }
  });
}
