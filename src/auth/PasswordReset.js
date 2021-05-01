import React, { useState } from "react";
import { Link } from "react-router-dom";
import {auth} from '../config/firebase/firebase'

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = event => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {setEmailHasBeenSent(false)}, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };

  return (
    <div>
      <h2>
        Reset your Password
      </h2>
      <div>
        <form action="">
          {emailHasBeenSent && (
            <div>
              An email has been sent to you!
            </div>
          )}
          {error !== null && (
            <div>
              {error}
            </div>
          )}
          <label htmlFor="userEmail" className="w-full block">
            Email:
          </label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            value={email}
            placeholder="email"
            onChange={onChangeHandler}
          />
          <button
            onClick={() => sendResetEmail()}
          >
            Send me a reset link
          </button>
        </form>
        <Link
          to ="/signIn"
        >
          &larr; back to sign in page
        </Link>
      </div>
    </div>
  );
};
export default PasswordReset;