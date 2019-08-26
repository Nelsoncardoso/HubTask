import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { _ } from 'lodash';

import api from '~/services/api';

import { Container, Task } from './styles';
import session from '~/helpers/session';

export default function Dashboard() {

  const [schedule, setSchedule] = useState([]);
  const [date] = useState(new Date());

  async function loadSchedule() {
    const header = {
      headers: session.get(),
    };
    const response = await api.get('/tasks', header);
    session.set(response.headers);
    setSchedule(response.data);
  }
  const deleteTask = async task_id => {
    const header = {
      headers: session.get(),
    };
    const response = await api.delete(`/tasks/${task_id}`, header);
    session.set(response.headers);
    loadSchedule();
  };


  useEffect(() => {
    loadSchedule();
  }, [date]);

  return (
    <Container>
      <Link to="/task">ADICIONAR TAREFA</Link>
      <ul>
        {schedule.map(task => (
          <Task key={task.id}>
            <header>
              <title>{task.name}</title>
              <actions>
                <Link to="/task" params={{ task: task }}>
                  <FaEdit className="edit" />
                </Link>
                <button type="button" onClick={() => deleteTask(task.id)}>
                  <FaTrash className="delete" />
                </button>
              </actions>
            </header>

            <span>{task.description}</span>
            <small>
              <Moment format="DD/MM/YYYY">{task.end_time}</Moment>
            </small>
          </Task>
        ))}
      </ul>
    </Container>
  );
}
