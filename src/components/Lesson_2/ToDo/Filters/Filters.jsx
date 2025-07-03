import React from 'react';
import { Form, Input, Label, ResetButton, Select } from './Filters.styled';
import { TbZoomReset } from 'react-icons/tb';

function Filters({ tags, filter, setFilter }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setFilter(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleReset() {
    setFilter({
      textFilter: '',
      completed: '',
      tag: '',
    });
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
          autoComplete="off"
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
      <ResetButton type="button" onClick={handleReset}>
        <TbZoomReset />
      </ResetButton>
    </Form>
  );
}

export default Filters;
