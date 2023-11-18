import React, { useState } from 'react';
import "./login.css";
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from "../firebase"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlelogin = () => {
    signInWithEmailAndPassword(auth, email, password)
  }
  return (
    <div className='login'>
      <img src='https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png' alt="" />
      <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder='Email' />
      <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder='Password' />
      <button onClick={handlelogin}>Log in</button>
    </div>
  )
}

export default Login;
