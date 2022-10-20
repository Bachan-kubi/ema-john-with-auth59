import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <h3 className="form-title">Log In</h3>
      <form>
      <div className="form-control">
          <label>Email: </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter Email"
          ></input>
        </div>
        <div className="form-control">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            required
            placeholder="Enter Password"
          ></input>
        </div>
        <button className="btn-submit" type="submit">Log In</button><br/>
      </form>
      <p>New to Amazon? <Link to='/signup'><small>Sign Up</small></Link></p>
      <button className="btn-submit" type="submit">Continue with Google</button>
    </div>
  );
};

export default Login;
