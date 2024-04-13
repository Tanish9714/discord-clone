import React from 'react'
import './login.css';
// import { signInWithPopup } from "firebase/auth";
import {provider, auth} from './components/firebase';


const Login = () => {
  
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    
  return (
    <div className='login'> 
        <div className="login_logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Discord_Color_Text_Logo_No_Padding.svg/2560px-Discord_Color_Text_Logo_No_Padding.svg.png" alt="discord logo" />
        </div>

        <button onClick={signIn}>Sign In</button>
    </div>
  )
}

export default Login;
