import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((todos) => {
      return todos.concat({ text: input, id: crypto.randomUUID() });
    });
    setInput("");
  };
  const removeToDo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id != id));

  return (
    <section className='min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10'>
      <div className='w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-6'>
        <h1 className='text-2xl font-semibold text-indigo-600'>Todo List</h1>
        <div className='flex gap-2'>
          <input
            className='flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400'
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Add new task'
          />
          <button
            className='bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition'
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>

        <ul className='space-y-3'>
          {todos.map(({ id, text }) => (
            <li
              key={id}
              className='flex justify-between items-center bg-gray-50 border border-gray-200 rounded-md px-4 py-2'
            >
              <span>{text}</span>
              <button
                onClick={() => removeToDo(id)}
                className='text-red-500 hover:text-red-700 font-semibold'
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Todo;
