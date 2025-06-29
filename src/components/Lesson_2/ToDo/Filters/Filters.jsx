import React from 'react';

function Filters() {
  return (
    <form>
      <label htmlFor="">Filter tasks</label>
      <input type="text" />
      <label htmlFor="">Sort tasks</label>
      <select>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <label htmlFor="">Select task</label>
      <select>
        <option value="task1">Task 1</option>
        <option value="task2">Task 2</option>
      </select>
    </form>
  );
}

export default Filters;
