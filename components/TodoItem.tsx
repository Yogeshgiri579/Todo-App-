"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../redux/todoSlice";
import { AppDispatch } from "../redux/store";
import { Todo } from "../types/todo";
import { PencilSquareIcon, TrashIcon, CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { toast } from "react-hot-toast";

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => setIsEditing(true);

  const handleUpdate = () => {
    if (editText.trim()) {
      dispatch(editTodo({ id: todo.id, text: editText }));
      setIsEditing(false);
      toast.success("Todo updated!");
    }
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success("Todo deleted!");
  };

  return (
    <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-800 px-6 py-4 mb-4 rounded-2xl shadow-md transition-transform duration-200 hover:scale-105 border border-blue-100 dark:border-gray-700">
      {isEditing ? (
        <input
          className="flex-1 mr-4 px-3 py-2 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-bold text-lg outline-none border-2 border-blue-400 focus:border-blue-600 transition"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleUpdate();
            if (e.key === "Escape") setIsEditing(false);
          }}
          autoFocus
        />
      ) : (
        <span
          className={`flex-1 mr-4 cursor-pointer font-bold text-xl transition-colors duration-200 ${
            todo.completed
              ? "line-through text-gray-400 dark:text-gray-500"
              : "text-gray-900 dark:text-white"
          }`}
          onClick={() => dispatch(toggleTodo(todo.id))}
        >
          {todo.text}
        </span>
      )}
      <div className="flex gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleUpdate}
              className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
              title="Update"
            >
              <CheckCircleIcon className="h-6 w-6 text-white cursor-pointer" />
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"
              title="Cancel"
            >
              <XMarkIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
            </button>
          </>
        ) : (
          <button
            onClick={handleEdit}
            className="p-2 rounded-full bg-gray-200 hover:bg-blue-100 transition-colors"
            title="Edit"
          >
            <PencilSquareIcon className="h-6 w-6 text-blue-600 cursor-pointer" />
          </button>
        )}
        <button
          onClick={handleDelete}
          className="p-2 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
          title="Delete"
        >
          <TrashIcon className="h-6 w-6 text-white cursor-pointer" />
        </button>
      </div>
    </div>
  );
}