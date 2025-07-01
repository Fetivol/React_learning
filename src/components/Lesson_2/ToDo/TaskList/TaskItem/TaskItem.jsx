import React, { useState } from 'react';
import { ListItem, TagsList, TaskName } from './TaskItem.styled';

function TaskItem({ setTasks, task: { id, task, desc, tags, completed } }) {
  const [isHovered, setIsHovered] = useState(false);

  function handleChange() {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !completed } : task
      )
    );
  }

  return (
    <ListItem key={id}>
      <TaskName>
        <input type="checkbox" checked={completed} onChange={handleChange} />
        <h4 className={completed ? 'completed' : ''}>{task}</h4>
      </TaskName>

      <TagsList>
        {tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </TagsList>
      <div
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <p>{desc}</p>
      </div>
    </ListItem>
  );
}

export default TaskItem;
