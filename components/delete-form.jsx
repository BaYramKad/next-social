import React from 'react';
import { deleteTask } from '../app/utils/actions';

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type='hidden' name='id' value={id} />
      <button className='btn btn-error'>Delete</button>
    </form>
  );
};

export default DeleteForm;
