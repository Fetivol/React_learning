import React from 'react';

function TaskItem({ task }) {
  return (
    <li>
      {task.task}---{task.desc}---{task.tags}
    </li>
  );
}

export default TaskItem;
