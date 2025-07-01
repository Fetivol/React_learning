import React from 'react';
import TaskItem from './TaskItem';
import { List } from './TaskList.styled';

function TaskList({ setTasks, tasks }) {
  return (
    <List>
      {tasks.map(task => (
        <TaskItem key={task.id} setTasks={setTasks} task={task} />
      ))}
    </List>
  );
}

export default TaskList;
