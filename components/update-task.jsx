import React from 'react';
import { updateTask } from '../utils/actions';

const UpdateTask = ({ task }) => {
  const { id, completed, content } = task;
  return (
    <form action={updateTask} className='p-5  bg-steal-100 border-2 w-[50%] flex flex-col gap-2 mb-2'>
      <input type='text' name='content' defaultValue={content} className='input input-border' />
      <input type='hidden' name='id' required value={id} />

      <label className='label cursor-pointer w-max'>
        <span className='label-text'>Completed</span>
        <input type='checkbox' name='completed' defaultChecked={completed} className='checkbox-primary checkbox checkbox-sm' />
      </label>

      <button className='btn btn-primary btn-sm'>edit</button>
    </form>
  );
};

export default UpdateTask;
