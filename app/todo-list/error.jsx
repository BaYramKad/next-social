'use client';

const Error = ({ message, reset }) => {
  console.log('message: ', message);
  return <div>Error: {message}</div>;
};

export default Error;
