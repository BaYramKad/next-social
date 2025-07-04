import React from 'react';

import { TodosForm, Todos } from '../../components';

const TodoList = async () => {
  return (
    <div className='list text-blue-950 rounded-box shadow-md p-4 h-[500px'>
      <TodosForm />
      <Todos />
    </div>
  );
};

export default TodoList;
