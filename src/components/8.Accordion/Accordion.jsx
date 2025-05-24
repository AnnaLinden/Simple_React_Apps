import React, { useState } from "react";

const Accordion = ({ term, definition }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className=' bg-[#2c2c2c] text-white flex items-center justify-center px-4'>
      <section className='bg-gray-800 text-white rounded-md shadow-md w-full max-w-md'>
        <button
          onClick={() => setIsActive(!isActive)}
          className='w-full flex justify-between items-center px-4 py-3 text-left focus:outline-none hover:bg-gray-700 transition'
        >
          <span className='font-medium text-lg'>{term}</span>
          <span className='text-xl'>{isActive ? "−" : "+"}</span>
        </button>

        {isActive && (
          <div className='px-4 pb-4 text-sm text-gray-200'>
            <p>{definition}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Accordion;
