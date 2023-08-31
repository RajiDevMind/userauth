import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const RegPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [isMember, setIsMember] = useState(false);

  const HandleFormSubmission = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        "/auth/register",
        {
          name,
          email,
          password,
        },
        { withCredentials: true }
      );
      if (resp) {
        setRedirect(true);
        alert("Successfully Registered!!!");
      }
    } catch (err) {
      alert("Registration failed, Try again?");
    }
  };
  if (redirect) {
    return <Navigate to={"/auth/login"} />;
  }
  return (
    <>
      <form onSubmit={HandleFormSubmission} className="register">
        <div>
          {/* <label htmlFor="name">Name: </label> */}
          <input
            type="text"
            name="name"
            className="typein"
            placeholder="Your Name?"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <button type="submit">Submit</button>
        <br />
        <span>
          Do you have account? <Link to={"/auth/login"}>Login</Link>
        </span>
      </form>
    </>
  );
};

export default RegPage;
