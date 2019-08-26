import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
import { addTaskRequest } from '~/store/modules/task/actions';

import { Container } from './styles';
import history from '~/services/history';

export default function Task() {
  const task = useSelector(state => state.task);
  const dispatch = useDispatch();

  const handleSubmitTask = data => {
    dispatch(addTaskRequest(data));
  }

  const goBack = () => {
    history.push('/dashboard');
  }

  return (
    <Container>
      <Form initialData={task} onSubmit={handleSubmitTask}>
        <strong>Titulo</strong>
        <Input name="name" type="text" placeholder="Insira um titulo" />
        <strong>Descricao</strong>
        <Input
          name="description"
          type="text"
          placeholder="Insira uma descricao"
        />
        <strong>Data</strong>
        <Input name="end_time" type="date" placeholder="Insira uma data" />

        <button type="submit">Salvar</button>
      </Form>

      <button onClick={() => goBack()} type="button">
        Voltar
      </button>
    </Container>
  );
}
