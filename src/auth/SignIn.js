import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { signInWithGoogle} from '../config/firebase/firebase'
import signInBG from '../assets/img/signInBG.svg'
import googleIcon from '../assets/img/google-icon.svg'
import { UserContext } from '../providers/UserProvider'
import { Redirect } from 'react-router-dom'

const SignIn = () => {
  const [error, setError] = useState(null)
  const user = useContext(UserContext);
  return (
    <>
    {user ? <Redirect to='/'/> : null}
    <SignInBackground>
      <SignInCard>
      <h2>Sign In</h2>
      <div>
        {error !== null && <span>{error}</span>}
        <button
          onClick={() => signInWithGoogle()}>
          <img class='sign-in-icon' src={googleIcon} alt={'sign in with google'}/>
          Sign in with Google
        </button>
      </div>
      </SignInCard>
    </SignInBackground>
    </>
  )
}

const SignInBackground = styled.section`
  display: flex;
  justify-content: center;
  background: url(${signInBG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
`

const SignInCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80vw;
  height: 60vh;
  margin: 80px 0 0;
  box-shadow: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);

  h2 {
    font-size: 40px;
    margin: -20px 0 0;
    color: rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    letter-spacing: 0.5rem;
  }

  button {
    display: flex;
    align-items: center;
    padding: 14px 30px;
    background: white;
    outline: none;
    border: none;
    border-radius: 20px;
    font-size: 16px;

    &:hover {
      cursor: pointer;
    }

  .sign-in-icon {
    width: 3vw;
    height: 100%;
    margin: 0 14px 0 0;
  }
  }
`

export default SignIn