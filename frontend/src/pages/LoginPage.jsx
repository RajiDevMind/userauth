import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const HandleFormSubmission = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        "/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      if (resp) {
        setRedirect(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <form onSubmit={HandleFormSubmission} className="login">
        <div>
          {/* <label htmlFor="email">Email: </label> */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="typein"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          {/* <label htmlFor="password">Password: </label> */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="typein"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        <br />
        <span>
          Don't have an account? <Link to={"/auth/register"}>Register</Link>
        </span>
      </form>
    </>
  );
};

export default LoginPage;
