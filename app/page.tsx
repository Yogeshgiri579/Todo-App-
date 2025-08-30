import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto mt-16 p-8 bg-white dark:bg-gray-900 border-4 border-teal-500 dark:border-cyan-400 rounded-3xl shadow-2xl">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-teal-700 dark:text-cyan-200 tracking-wide drop-shadow-lg">
        🚀 Todo App
      </h1>
      <TodoInput />
      <TodoList />
    </main>
  );
}