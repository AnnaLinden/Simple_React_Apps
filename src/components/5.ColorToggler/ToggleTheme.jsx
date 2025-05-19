import { useState } from "react";

const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center transition-colors duration-500 ${
        isDark ? "bg-neutral-900 text-amber-400" : "bg-white text-neutral-900"
      }`}
    >
      {/* Toggle button top-right */}
      <button
        onClick={handleClick}
        className={`absolute top-6 right-6 px-4 py-2 rounded-md border-2 transition-all duration-300 font-medium ${
          isDark
            ? "border-amber-400 text-amber-400 hover:bg-neutral-800"
            : "border-neutral-900 text-neutral-900 hover:bg-gray-100"
        }`}
      >
        {isDark ? "Dark Theme" : "Light Theme"}
      </button>

      {/* Heading */}
      <h1 className='text-4xl md:text-6xl text-center font-outline uppercase tracking-wide leading-snug'>
        Not Just <br /> Another App
      </h1>
    </div>
  );
};

export default ToggleTheme;
