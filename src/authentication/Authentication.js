import React, { useState } from 'react';
import "./Authentication.css";
import intsalogo from "../image/9364675fb26a.svg";
import Login from './login';
import Signup from './Signup';


function Authentication() {
    const [active, setActive] = useState("login");

    const handleChange = () => {
        setActive(active === "login" ? "signup" : "login")
    }
    return (
        <div className='authentication'>
            <div className='auth__left'>
                <img src={intsalogo} alt="" />
            </div>
            <div className='auth_right'>
                {active === "login" ? (<Login />) : (<Signup />)}
                
                <div className='auth_more'>
                    <span>
                    {active === "login" ? (<>
                        Don't have an account? <button onClick={handleChange}>Sign up</button>
                    </>) : (<>
                        Have an account? <button onClick={handleChange}>Login</button>
                    </>)}
                        
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Authentication
