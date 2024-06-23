import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <div className="signup">
      <div className="card">
        <div className="left">
          <h2>-<br/>Social Media Signup<br/>-</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, necessitatibus!
          </p>
          <span>Have An Account?</span>
          <Link to='/login'>
          <button className="btn btn-primary">Login</button>
          </Link>
        </div>
        <form className="right">
          <input type="text" required placeholder="username" />
          <input type="email" required placeholder='email' />
          <input type="text" required placeholder="password" />
          <button type="submit" className="btn">Register</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
