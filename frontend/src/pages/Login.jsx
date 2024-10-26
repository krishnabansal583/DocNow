import React, { useState } from "react";
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex items-center justify-center min-h-screen mb-40">
      <form
        onSubmit={onSubmitHandler}
        className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full mx-4 flex flex-col gap-5"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-600">
            {state === "Sign Up" ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-gray-500">
            {state === "Sign Up" ? "Join us to book your appointments" : "Login to continue"}
          </p>
        </div>

        {state === "Sign Up" && (
          <div className="relative flex items-center">
            <HiOutlineUser className="absolute ml-3 text-gray-400" />
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
        )}

        <div className="relative flex items-center">
          <HiOutlineMail className="absolute ml-3 text-gray-400" />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="relative flex items-center">
          <HiOutlineLockClosed className="absolute ml-3 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {state === "Sign Up" ? (
          <p className="text-center text-gray-500">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-blue-600 cursor-pointer underline"
            >
              Login Here
            </span>
          </p>
        ) : (
          <p className="text-center text-gray-500">
            Don't have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-blue-600 cursor-pointer underline"
            >
              Sign Up Here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
