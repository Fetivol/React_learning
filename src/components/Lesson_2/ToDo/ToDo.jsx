import React, { useState } from 'react';
import Filters from './Filters';
import { Title, Wrapper } from './ToDo.styled';
import TaskList from './TaskList';
import AddTask from './AddTask';

function ToDo() {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      task: 'Купити молоко',
      desc: 'in the store',
      tags: ['магазин', 'продукти'],
      completed: false,
    },
  ]);

  return (
    <Wrapper>
      <Title>ToDo List</Title>
      <AddTask setTasks={setTasks} tasks={tasks} />
      <Filters />
      <TaskList tasks={tasks} />
    </Wrapper>
  );
}

export default ToDo;
