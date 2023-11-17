import React, {useState} from 'react';
import "./Signup.css";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../firebase";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleSignup = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
          .then((authUser) => {
            signInWithEmailAndPassword(auth, email, password).then(
              updateProfile(auth.currentUser, {
                displayName: username,
              })
            );
          })
          .catch((err) => {
            alert(err);
          });
      };

  return (
    <div className='signup'>
      <img src='https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png' alt=""/>
      <input onChange={e => setUsername(e.target.value)} value={username} type="text" placeholder='Username'/>
      <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder='Email'/>
      <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder='Password'/>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  )
}

export default Signup
