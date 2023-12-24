import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo,deleteTodos } from '../features/todo/todoSlice';

function AddTodos() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTask = () => {
    dispatch(addTodo(inputValue));
    setInputValue('');
  };
  const deleteAlltasks = () => {
    dispatch(deleteTodos());
    setInputValue('')
  };

  return (
    <>
      <input
        className="input-task"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter task..."
      />
      <button onClick={addTask}>Add</button>
      <button onClick={deleteAlltasks}>Delete All</button>
    </>
  );
}

export default AddTodos;
