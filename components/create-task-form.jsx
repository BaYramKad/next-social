'use client';
import React, { useActionState, useEffect } from 'react';
import { createTask } from '../app/utils/actions';
import toast from 'react-hot-toast';

const initialState = {
  message: null,
  type: null,
};

export const TodosForm = () => {
  const [state, actionState, isPending] = useActionState(createTask, initialState);

  useEffect(() => {
    if (state.type === 'success') {
      toast.success(state.message);
    } else if (state.type === 'error') {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <div>
      <form action={actionState} className='flex gap-4 justify-center py-8 join relative'>
        <input type='text' className='input text-white' name='content' required />
        <button className='btn btn-primary join-item' disabled={isPending}>
          {isPending ? 'creating' : 'create task'}
        </button>
      </form>
    </div>
  );
};
