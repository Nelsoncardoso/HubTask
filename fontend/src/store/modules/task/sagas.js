import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { addTaskRequestSuccess, addTaskRequestFailure } from './actions';
import session from '~/helpers/session';
import history from '~/services/history';

export function* addTask({ payload }) {
  try {
    const response = yield call(api.post, '/tasks', payload.data, {
      headers: session.get(),
    });
    session.set(response.headers);
    history.push('/dashboard');
    toast.success('Tarefa adicionada com sucesso!');

    yield put(addTaskRequestSuccess(response.data));
  } catch (err) {
    toast.success('Erro ao cadastrar nova tarefa, tente novamente!');
    yield put(addTaskRequestFailure());
  }
}

export default all([takeLatest('@task/ADD_TASK_REQUEST', addTask)]);
