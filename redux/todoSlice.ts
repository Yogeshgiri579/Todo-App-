import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types/todo";
import { v4 as uuidv4 } from "uuid";

interface TodoState {
  list: Todo[];
}

const initialState: TodoState = {
  list: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.list.push({
        id: uuidv4(),
        text: action.payload,
        completed: false,
      });
    },
   editTodo: (state, action) => {
  const { id, text } = action.payload;
  const todo = state.list.find((t) => t.id === id);
  if (todo) {
    todo.text = text;
  }
},
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.list.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(t => t.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
