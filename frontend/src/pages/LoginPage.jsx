import React from "react";

const LoginPage = () => {
  return (
    <>
      <form>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" />
        </div>
      </form>
    </>
  );
};

export default LoginPage;
