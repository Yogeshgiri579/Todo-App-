"use client";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todos.list);

  return (
    <ul>
      {todos.length === 0 ? (
        <p className="text-gray-500 text-lg font-semibold text-center py-8">No todos yet. Add one!</p>
      ) : (
        todos.map(todo => (
          <li key={todo.id} className="animate-fade-in">
            <TodoItem todo={todo} />
          </li>
        ))
      )}
    </ul>
  );
}