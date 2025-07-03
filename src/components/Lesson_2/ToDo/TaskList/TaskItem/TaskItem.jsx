import React, { useState } from 'react';
import {
  Button,
  ButtonWrapper,
  Form,
  Input,
  ListItem,
  TagsList,
  TaskName,
  Textarea,
} from './TaskItem.styled';
import { MdDeleteOutline, MdDownloadDone } from 'react-icons/md';
import { RiPencilLine } from 'react-icons/ri';

function TaskItem({
  setTasks,
  allTasks,
  task: { id, task, desc, tags, completed },
  setFilter,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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

  function handleDelete(id) {
    setTasks(allTasks.filter(task => id !== task.id));
  }

  function EditableElement({ setTasks, id, task, desc, tags, completed }) {
    const [editForm, setEditForm] = useState({
      task,
      desc,
      tags: Array.isArray(tags) ? tags.join(', ') : tags || '',
    });

    function handleEditChange(e) {
      const { name, value } = e.target;
      setEditForm(prev => ({
        ...prev,
        [name]: value,
      }));
    }

    function handleEditSubmit(e) {
      e.preventDefault();
      setTasks(prev =>
        prev.map(t =>
          t.id === id
            ? {
                ...t,
                task: editForm.task,
                desc: editForm.desc,
                tags: editForm.tags
                  .split(',')
                  .map(tag => tag.trim())
                  .filter(tag => tag.length > 0),
              }
            : t
        )
      );
      setIsEditing(false);
    }

    return (
      <ListItem key={id}>
        <Form onSubmit={handleEditSubmit}>
          <TaskName>
            <input
              type="checkbox"
              checked={completed}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="task"
              value={editForm.task}
              onChange={handleEditChange}
            />
          </TaskName>
          <Textarea
            name="desc"
            rows="5"
            cols="20"
            value={editForm.desc}
            onChange={handleEditChange}
          />
          <Input
            type="text"
            name="tags"
            value={editForm.tags}
            onChange={handleEditChange}
          />
          <ButtonWrapper>
            <Button
              type="button"
              onClick={() => {
                handleDelete(id);
              }}
            >
              <MdDeleteOutline />
            </Button>
            <Button type="submit">
              <MdDownloadDone />
            </Button>
          </ButtonWrapper>
        </Form>
      </ListItem>
    );
  }

  return isEditing ? (
    <EditableElement
      setTasks={setTasks}
      id={id}
      task={task}
      desc={desc}
      tags={tags}
      completed={completed}
    />
  ) : (
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
        <Button
          type="button"
          onClick={() => {
            handleDelete(id);
          }}
        >
          <MdDeleteOutline />
        </Button>
        <Button>
          <RiPencilLine
            onClick={() => {
              setIsEditing(true);
            }}
          />
        </Button>
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
