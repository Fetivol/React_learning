import React from 'react';
import TaskItem from './TaskItem';
import { List } from './TaskList.styled';

function TaskList({ setTasks, tasks, setFilter }) {
  return (
    <List>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          setTasks={setTasks}
          task={task}
          setFilter={setFilter}
        />
      ))}
    </List>
  );
}

export default TaskList;
