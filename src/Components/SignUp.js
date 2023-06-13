import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="absolute flex justify-center items-center mx-auto p-4">
      <a href="##" className="flex justify-center items-center">
        <img
          src="https://i.pinimg.com/736x/db/e3/5f/dbe35ff8f5695e8371ae4d68057d1b9d.jpg"
          alt="Logo"
          className="w-10 h-10 items-center justify-center rounded-2xl"
        />
      </a>
      <h2 className="pt-6text-center justify-center text-3xl font-bold mb-4">
        Welcome to PinYourMood
      </h2>
      <form>
        <div className="mb-4 justify-center items-center">
          <label
            htmlFor="email"
            className="block text-left text-gray-700 text-sm mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded-md px-3 py-2 w-40"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4 items-center justify-center">
          <label
            htmlFor="pwd"
            className="block text-left text-gray-700 text-sm mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="pwd"
            className="border border-gray-300 rounded-md px-3 py-2 w-40"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-xs font-bold">
            <a className="hover:text-orange-500" href="##">
              Forgot your password?
            </a>
          </p>
        </div>
        <button
          type="submit"
          onSubmit={handleSubmit}
          className="bg-blue-500 items-center justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
