import { nanoid, createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [{ id: 1, text: "create todo" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    deleteTodos: (state) => {
      state.todos = [];
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);

      if (todoToUpdate) {
        todoToUpdate.text = newText;
      }
    },
  },
});
export const { addTodo, removeTodo, deleteTodos, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
