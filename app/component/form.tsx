"use client";
import { useState } from "react";

const Form = () => {
  const [fname, setFname] = useState("");
  const [errorFname, setErrorFname] = useState("");
  const [errorAge, setErrorAge] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  function handelChangeFname(e) {
    setFname(e.target.value);
    if (errorFname) setErrorFname("");
  }
  const [age, setAge] = useState("");
  function handelChangeAge(e) {
    setAge(e.target.value);
    if (errorAge) setErrorAge("");
  }
  const [password, setPassword] = useState("");
  function handelChangePassword(e) {
    setPassword(e.target.value);
    if (errorPassword) setErrorPassword("");
  }
  function handelSubmit(e) {
    e.preventDefault();
    // first name validation
    if (fname.trim() === "" || fname.trim().length < 3) {
      setErrorFname(
        "First name can't be empty and must be at least 3 characters",
      );
      return;
    }

    // age validation:
    if (age === "" || Number(age) < 18 ) {
      setErrorAge("Age can't be empty and must be a number >= 18");
      return;
    }

    //password validation:
    if (password === "") {
      setErrorPassword("Password can't be empty!");
      return;
    }
    if (password.length < 8) {
      setErrorPassword("Password must be at least 8 characters!");
      return;
    }
    if (!/\d/.test(password)) {
      setErrorPassword("Password must contain at least one number!");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setErrorPassword("Password must contain at least one lowercase letter!");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setErrorPassword("Password must contain at least one uppercase letter!");
      return;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      setErrorPassword(
        "Password must contain at least one special character (!@#$%^&*)!",
      );
      return;
    }
    
    setErrorFname("");
    setErrorAge("");
    setErrorPassword("");
    alert("Good job");

    // clear form fields
    setFname("");
    setAge("");
    setPassword("");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <form
        action="/"
        method="get"
        className="w-full max-w-md rounded-lg bg-white p-6 shadow-md"
      >
        <div className="mb-4">
          <label className="mb-2 block font-medium text-slate-700">
            First name:
          </label>
          <input
            type="text"
            id="Fname"
            name="Fname"
            value={fname}
            className="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            onChange={handelChangeFname}
          />
          {errorFname && (
            <p className="text-red-500 pl-3 text-xs"> {errorFname} </p>
          )}
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-medium text-slate-700">َAge:</label>
          <input
            type="number"
            id="Age"
            name="Age"
            value={age}
            className="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            onChange={handelChangeAge}
          />
          {errorAge && (
            <p className="text-red-500 pl-3 text-xs"> {errorAge} </p>
          )}
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-medium text-slate-700">
            {" "}
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            className="w-full rounded border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
            onChange={handelChangePassword}
          />
          {errorPassword && (
            <p className="text-red-500 pl-3 text-xs"> {errorPassword} </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full rounded bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
          onClick={handelSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
