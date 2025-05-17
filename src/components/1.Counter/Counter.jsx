import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <section className='min-h-screen bg-gradient-to-br from-neutral-900 to-zinc-800 flex items-center justify-center px-4 py-12'>
      <div className='bg-white rounded-xl shadow-2xl p-8 md:p-10 max-w-sm w-full text-center ring-1 ring-rose-100 ring-offset-4 ring-offset-neutral-900 transition-all duration-300'>
        <h1 className='text-2xl md:text-3xl font-semibold text-rose-600 mb-6 tracking-tight'>
          Counter App
        </h1>
        <div
          className='text-6xl md:text-7xl font-bold text-rose-700 mb-8'
          aria-live='polite'
        >
          {count}
        </div>
        <div className='flex justify-center gap-4'>
          <button
            className='bg-rose-400 hover:bg-rose-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 text-white font-medium text-lg px-5 py-2.5 rounded-lg shadow transition'
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
          <button
            className='bg-rose-400 hover:bg-rose-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 text-white font-medium text-lg px-5 py-2.5 rounded-lg shadow transition'
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
