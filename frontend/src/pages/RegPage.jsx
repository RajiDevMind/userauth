import { useState } from "react";
import { Link } from "react-router-dom";
const RegPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleFormSubmission = (e) => {
    e.preventDefault();
    console.log("reg button clicked!!!");
  };
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
          Do you have account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
    </>
  );
};

export default RegPage;
