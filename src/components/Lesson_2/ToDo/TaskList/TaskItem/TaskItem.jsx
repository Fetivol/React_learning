import React, { useState } from 'react';
import { ListItem, TagsList, TaskName } from './TaskItem.styled';

function TaskItem({
  setTasks,
  task: { id, task, desc, tags, completed },
  setFilter,
}) {
  const [isHovered, setIsHovered] = useState(false);

  function truncateText(text, maxLength = 25) {
    return text.length > maxLength
      ? text.substring(0, maxLength) + '...'
      : text;
  }

  function handleChange() {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !completed } : task
      )
    );
  }

  function handleTagClick(tagName) {
    setFilter(prev => ({
      ...prev,
      tag: tagName,
    }));
  }

  return (
    <ListItem
      key={id}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <TaskName>
        <input type="checkbox" checked={completed} onChange={handleChange} />
        <h4 className={completed ? 'completed' : ''}>{task}</h4>
      </TaskName>

      <TagsList>
        {tags.map(tag => (
          <li
            key={tag}
            onClick={() => {
              handleTagClick(tag);
            }}
          >
            {tag}
          </li>
        ))}
      </TagsList>

      <p>{isHovered ? desc : truncateText(desc)}</p>
    </ListItem>
  );
}

export default TaskItem;
