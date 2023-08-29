import React from "react";

const RegPage = () => {
  return (
    <>
      <form>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" placeholder="Your Name?" />
        </div>
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

export default RegPage;
