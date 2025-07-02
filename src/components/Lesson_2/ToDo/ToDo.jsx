import React, { useState } from 'react';
import Filters from './Filters';
import { Title, Wrapper } from './ToDo.styled';
import TaskList from './TaskList';
import AddTask from './AddTask';

function ToDo() {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      task: 'Купити молоко',
      desc: 'in the store',
      tags: ['магазин', 'продукти'],
      completed: false,
    },
    {
      id: '2',
      task: 'Закінчити проект',
      desc: 'Потрібно завершити всі завдання по проекту, включаючи тестування, документацію та деплой на продакшн сервер',
      tags: ['робота', 'терміново'],
      completed: false,
    },
    {
      id: '3',
      task: 'Подзвонити мамі',
      desc: 'Обговорити плани на вихідні',
      tags: ["сім'я", 'продукти'],
      completed: true,
    },
    {
      id: '4',
      task: 'Записатися до лікаря',
      desc: "Планова перевірка здоров'я у стоматолога та терапевта, потрібно зателефонувати заздалегідь та узгодити зручний час",
      tags: ["здоров'я", 'важливо'],
      completed: false,
    },
  ]);
  const [filter, setFilter] = useState({
    textFilter: '',
    completed: '',
    tag: '',
  });

  const filteredTasks = tasks.filter(task => {
    const matchesText =
      filter.textFilter === '' ||
      task.task.toLowerCase().includes(filter.textFilter.toLowerCase());

    const matchesCompleted =
      filter.completed === '' || String(task.completed) === filter.completed;

    const matchesTag = filter.tag === '' || task.tags.includes(filter.tag);

    return matchesText && matchesCompleted && matchesTag;
  });

  const tagsArr = tasks
    .map(task => task.tags)
    .flat()
    .filter((tag, index, array) => array.indexOf(tag) === index)
    .sort();

  return (
    <Wrapper>
      <Title>ToDo List</Title>
      <AddTask setTasks={setTasks} tasks={tasks} />
      <Filters tags={tagsArr} filter={filter} setFilter={setFilter} />
      <TaskList
        setTasks={setTasks}
        tasks={filteredTasks}
        setFilter={setFilter}
      />
    </Wrapper>
  );
}

export default ToDo;
