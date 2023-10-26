import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !lastName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!termsAccepted) {
      setError("You must accept the terms of use and privacy policy");
      return;
    }

    // Registration logic here

    setError("");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col lg:flex-row bg-gray-800 overflow-hidden h-screen">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-signup-img prose">
          <h1 className="text-white text-5xl mb-3 font-extrabold">Welcome</h1>
          <div>
            <p className="text-white font-normal text-base">
              Hello, welcome to our registration page. Please register yourself
              here{" "}
              <a href="#" className="text-purple-500">
                Learn More
              </a>
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 py-16 px-12 flex flex-col items-start justify-center">
          <h2 className="text-3xl mb-4">Register</h2>
          <p className="mb-4">
            Create your account. It&apos;s free and only takes a minute.
          </p>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-400 py-1 px-2 bg-gray-700 text-white"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border border-gray-400 py-1 px-2 bg-gray-700 text-white"
              />
            </div>
            <div className="mt-5">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-400 py-1 w-full p-2 bg-gray-700 text-white"
              />
            </div>
            <div className="mt-5">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-400 py-1 w-full p-2 bg-gray-700 text-white"
              />
            </div>
            <div className="mt-5">
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border border-gray-400 py-1 w-full p-2 bg-gray-700 text-white"
              />
            </div>
            <div className="mt-5">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="border-gray-400"
                />
                <span>
                  I accept the{" "}
                  <a href="#" className="text-purple-500 font-semibold">
                    Terms of Use
                  </a>{" "}
                  &{" "}
                  <a href="#" className="text-purple-500 font-semibold">
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>
            <Link to="/login">
            <div className="mt-5">
              <button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-700 ease-in-out duration-500 py-3 text-center text-white"
              >
                Register Now
              </button>
            </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
