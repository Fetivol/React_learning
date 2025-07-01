import React from 'react';
import TaskItem from './TaskItem';
import { List } from './TaskList.styled';

function TaskList({ tasks }) {
  return (
    <List>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </List>
  );
}

export default TaskList;
