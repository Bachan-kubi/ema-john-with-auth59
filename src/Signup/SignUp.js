import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [error, setError]= useState(null);



  const handleSubmit = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    // console.log(email, password, confirm);
    if(password.length<6){
      setError('please input at least 6 characters!');
      return;
    }
    if(password !== confirm){
      setError('password didnt match!');
      return;
    }
  }
    return (
        <div className="form-container">
      <h3 className="form-title">Sign Up</h3>
      <form onSubmit={handleSubmit}>
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
        <div className="form-control">
          <label>Confirm Password: </label>
          <input
            type="password"
            name="confirm"
            required
            placeholder="Confirm Password"
          ></input>
        </div>
        <button className="btn-submit" type="submit">Sign Up</button><br/>
      </form>
      <p>Already have an account? <Link to='/login'><small>Log in</small></Link></p>
      <button className="btn-submit" type="submit">Continue with Google</button>
      <p className='error'>{error}</p>
    </div>
    );
};

export default SignUp;