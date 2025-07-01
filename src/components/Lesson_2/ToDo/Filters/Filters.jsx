import React from 'react';

function Filters({ filter, setFilter }) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <label htmlFor="nameFilter">Filter tasks</label>
      <input
        type="text"
        id="nameFilter"
        name="textFilter"
        value={filter}
        onChange={e => {
          setFilter(e.target.value);
          console.log(filter);
        }}
      />

      <label htmlFor="completed">Sort tasks</label>
      <select name="completed" id="completed">
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
