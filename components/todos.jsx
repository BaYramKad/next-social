import React from 'react';
import DeleteForm from './delete-form';
import Link from 'next/link';
import { getAllTasks } from '../app/utils/actions';

export const Todos = async () => {
  const data = await getAllTasks();

  if (!data.length) {
    return <h1 className='mx-auto'>No Tasks</h1>;
  }
  return (
    <ul className='list flex'>
      {data.map((task) => (
        <li key={task.id} className='flex items-center justify-between gap-4 p-4 shadow-md '>
          <h1 className={`text-lg font-bold ${task.completed && 'line-through'}`}>{task.content}</h1>
          <div className='flex gap-3'>
            <Link href={`/todo-list/${task.id}`} className='btn'>
              Update
            </Link>
            <DeleteForm id={task.id} />
          </div>
        </li>
      ))}
    </ul>
  );
};
