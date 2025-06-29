import React from 'react';
import Filters from './Filters';
import { Title, Wrapper } from './ToDo.styled';
import TaskList from './TaskList';

function ToDo() {
  return (
    <Wrapper>
      <Title>ToDo</Title>
      <form>
        <label htmlFor="">Add a task</label>
        <input type="text" />
        <button type="submit">Add</button>
      </form>
      <Filters />
      <TaskList />
    </Wrapper>
  );
}

export default ToDo;
