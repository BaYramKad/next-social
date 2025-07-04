import { getTask } from '../../utils/actions';
import UpdateTask from '../../../components/update-task';
import Link from 'next/link';
import React from 'react';

const Todo = async ({ params }) => {
  const { id } = await params;
  const task = await getTask(id);

  return (
    <div className='mt-20'>
      <UpdateTask task={task} />
      <Link href='/todo-list' className='btn btn-accent'>
        back to list
      </Link>
    </div>
  );
};

export default Todo;
