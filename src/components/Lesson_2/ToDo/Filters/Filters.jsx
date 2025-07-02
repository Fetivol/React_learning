import React from 'react';
import { Form, Input, Label, Select } from './Filters.styled';

function Filters({ tags, filter, setFilter }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setFilter(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <Label htmlFor="nameFilter">
        Filter tasks
        <Input
          type="text"
          id="nameFilter"
          name="textFilter"
          value={filter.textFilter}
          onChange={handleChange}
        />
      </Label>

      <Select
        name="completed"
        id="completed"
        value={filter.completed}
        onChange={handleChange}
      >
        <option value="">Select status</option>
        <option value="true">Completed</option>
        <option value="false">Pending</option>
      </Select>

      <Select name="tag" id="tags" value={filter.tag} onChange={handleChange}>
        <option value="">Select tag</option>
        {tags.map(tag => (
          <option value={tag} key={tag}>
            {tag}
          </option>
        ))}
      </Select>
    </Form>
  );
}

export default Filters;
