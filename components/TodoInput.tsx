"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { AppDispatch } from "../redux/store";
import { toast } from "react-hot-toast";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

export default function TodoInput() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
      toast.success("Todo added!");
    } else {
      toast.error("Please enter a todo!");
    }
  };

  return (
    <div className="flex items-center gap-3 mb-8 animate-fade-in">
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === "Enter" && handleAdd()}
        placeholder="What needs to be done?"
        className="flex-1 px-5 py-3 rounded-2xl border-2 border-amber-500 dark:border-amber-400 bg-white dark:bg-gray-900 text-lg font-bold text-gray-800 dark:text-white placeholder:italic placeholder:text-gray-400 dark:placeholder:text-gray-500 shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-200 dark:focus:ring-amber-900 transition-all duration-300"
      />
      <button
        onClick={handleAdd}
        className="flex items-center gap-1 cursor-pointer px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-500 text-white font-extrabold text-lg shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
        title="Add Todo"
      >
        <PlusCircleIcon className="h-7 w-7 text-white drop-shadow" />
        Add
      </button>
    </div>
  );
}