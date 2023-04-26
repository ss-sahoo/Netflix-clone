import React, { useState } from 'react'
import './Login.css'
import Signup from './Signup';

function Login() {
  const[signin,setSignin]=useState(false);
  return (
    <div className='login'>
      <div className="login_background">
        <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
         alt=''/>
         <button className=' login_button'
          onClick={()=>setSignin(true)}
         >Sign In</button>

         <div className="login_gradient"/>
      </div>
      <div className="login_body">
        {signin?(
          <Signup/>
        ):(
          <>
        <h1>Unlimited Films, TV Shows And More.</h1>
        <h2>Watch any time , cancel at any time.</h2>
        <h3>Ready to watch? Enter your Email to cteate or restart your membership</h3>
        <div className="login_input">
          <form>
            <input type="email" placeholder='Email Address'/>
            <button onClick={()=>setSignin(true)} className='loin_getstarted'>GET STARTED</button>
          </form>
        </div>
        </>

        )}
        
      </div>
    </div>
  )
}

export default Login
