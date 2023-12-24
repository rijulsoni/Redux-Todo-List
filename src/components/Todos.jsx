import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [newText, setNewText] = useState("");
  const [isEditing, setIsEditing] = useState(null);

  const handleUpdate = (id) => {
    if (newText.trim() !== "") {
      dispatch(updateTodo({ id, newText }));
      setNewText("");
      setIsEditing(null);
    } else {
      dispatch(removeTodo(id));
      setIsEditing(null);
    }
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
    setIsEditing(null); // Clear the input when removing the todo
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <div>
            {isEditing === todo.id ? (
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
            ) : (
              todo.text
            )}
          </div>
          {isEditing === todo.id ? (
            <button onClick={() => handleUpdate(todo.id)}>Update</button>
          ) : (
            <button
              onClick={() => {
                setNewText(todo.text);
                setIsEditing(todo.id);
              }}
            >
              Edit
            </button>
          )}
          <button onClick={() => handleRemove(todo.id)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
