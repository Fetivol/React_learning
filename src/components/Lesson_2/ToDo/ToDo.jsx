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
      tags: ["сім'я"],
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
  const [filter, setFilter] = useState('');

  const filteredTasks = tasks.filter(task =>
    task.task.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Wrapper>
      <Title>ToDo List</Title>
      <AddTask setTasks={setTasks} tasks={tasks} />
      <Filters filter={filter} setFilter={setFilter} />
      <TaskList setTasks={setTasks} tasks={filteredTasks} />
    </Wrapper>
  );
}

export default ToDo;
