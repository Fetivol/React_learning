import React from 'react';
import { ListItem } from './TaskItem.styled';

function TaskItem({ task: { id, task, desc, tags, completed } }) {
  return (
    <ListItem>
      <div>
        <h4>{task}</h4>
        <label>
          <input type="checkbox" value={completed}></input>
          Done
        </label>
        <ul>
          {tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div>
          <p>{desc}</p>
        </div>
      </div>
    </ListItem>
  );
}

export default TaskItem;
