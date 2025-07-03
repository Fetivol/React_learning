import React, { useState } from 'react';
import { Form, Input, Label, Textarea, Button } from './AddTask.styled';
// import { MdOutlineBookmarkAdd } from 'react-icons/md';

function AddTask({ setTasks }) {
  const [form, setForm] = useState({
    task: '',
    desc: '',
    tags: '',
    completed: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const tagsArray = form.tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);

    setTasks(prev => [
      ...prev,
      {
        ...form,
        tags: tagsArray,
        id: crypto.randomUUID(),
        completed: false,
      },
    ]);
    setForm({
      task: '',
      desc: '',
      tags: '',
      completed: false,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="taskInput">Add a task</Label>
      <Input
        type="text"
        name="task"
        id="taskInput"
        value={form.task}
        placeholder="Enter task"
        required
        onChange={handleChange}
      />

      <Label htmlFor="taskDesc">Add description</Label>
      <Textarea
        name="desc"
        id="taskDesc"
        rows="5"
        cols="30"
        value={form.desc}
        placeholder="Enter task description"
        onChange={handleChange}
      />

      <Label htmlFor="taskTags">Add tags</Label>
      <Input
        type="text"
        name="tags"
        id="taskTags"
        value={form.tags}
        placeholder="Enter tags separated by commas"
        onChange={handleChange}
      />
      <Button type="submit">Add</Button>
    </Form>
  );
}

export default AddTask;
