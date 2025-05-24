import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  function validate(e) {
    e.preventDefault();

    if (username.length > 8) {
      setErrorUsername("");
      setUserColor("green");
    } else {
      setErrorUsername("Username must be 8 characters long.");
      setUserColor("red");
    }

    if (email.includes("@gmail")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setEmailColor("red");
      setErrorEmail("Email should include @gmail");
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password must be at least 8 characters.");
      setPasswordColor("red");
    }

    if (password !== "" && password === confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Passwords do not match.");
      setConfirmPasswordColor("red");
    }
  }

  const getInputClass = (color) => {
    return `w-full px-4 py-2 border rounded-md outline-none transition-colors ${
      color === "green"
        ? "border-green-500 focus:ring-2 focus:ring-green-300"
        : color === "red"
        ? "border-red-500 focus:ring-2 focus:ring-red-300"
        : "border-gray-300 focus:ring-2 focus:ring-blue-300"
    }`;
  };

  return (
    <div className='min-h-screen bg-gray-900 flex items-center justify-center p-6'>
      <form
        className='bg-gray-800 text-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6'
        onSubmit={validate}
      >
        <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>

        {/* Username */}
        <div>
          <input
            type='text'
            placeholder='Username'
            className={getInputClass(userColor)}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errorUsername && (
            <p className='text-red-400 text-sm mt-1'>{errorUsername}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type='email'
            placeholder='Email'
            className={getInputClass(emailColor)}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorEmail && (
            <p className='text-red-400 text-sm mt-1'>{errorEmail}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            type='password'
            placeholder='Password'
            className={getInputClass(passwordColor)}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorPassword && (
            <p className='text-red-400 text-sm mt-1'>{errorPassword}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <input
            type='password'
            placeholder='Confirm Password'
            className={getInputClass(confirmPasswordColor)}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errorConfirmPassword && (
            <p className='text-red-400 text-sm mt-1'>{errorConfirmPassword}</p>
          )}
        </div>

        <button
          type='submit'
          className='w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition'
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Form;
