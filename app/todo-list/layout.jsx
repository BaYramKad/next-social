import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className='w-[768px] mx-auto'>
      <h1 className='text-center py-10 font-black text-7xl'>Todo List</h1>
      {children}
    </div>
  );
};

export default Layout;
