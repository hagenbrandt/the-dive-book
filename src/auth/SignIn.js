import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {signInWithGoogle, auth} from '../config/firebase/firebase'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const signInWithEmailAndPasswordHandler = (event,email, password) => {
      event.preventDefault();
      auth.signInWithEmailAndPassword(email, password).catch(error => {
        setError("Error signing in with password and email!");
        console.error("Error signing in with password and email", error);
      });
    };

  const onChangeHandler = (event) => {
    const {name, value} = event.currentTarget;

    if(name === 'userEmail') {
      setEmail(value);
    }
    else if(name === 'userPassword'){
      setPassword(value);
    }
  };

  return (
    <div>
      <h2>Sign In:</h2>
      <div>
        {error !== null && <span>{error}</span>}
        <form>
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <input
            type="email"
            name="userEmail"
            value = {email}
            placeholder="mail"
            id="userEmail"
            onChange = {(event) => onChangeHandler(event)}
          />
          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <input
            type="password"
            name="userPassword"
            value= {password}
            placeholder="Password"
            id="userPassword"
            onChange = {(event) => onChangeHandler(event)}
          />
          <button onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}}>
            Sign in
          </button>
        </form>
        <p>or</p>
        <button
          onClick={() => signInWithGoogle()}>
          Sign in with Google
        </button>
        <p className="text-center my-3">
          Don't have an account?{" "}
          <Link to="signUp" >
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to = "passwordReset" >
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn