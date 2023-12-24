import React from 'react';
import logo from '../images/logo.png';

const Title = () => {
  return (
    <div>
      <img style={{height:'60px'}} src={logo} alt="todo-list images"  />
      <h1 className="text-center text-lg ml-2">TODO List</h1>
    </div>
  );
};

export default Title;
