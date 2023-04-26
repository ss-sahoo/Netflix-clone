import React, { useRef } from 'react'
import './Signup.css'
import { auth } from  '../firebase';

function Signup() { 
    const emailRef=useRef(null);
    const passwordlRef=useRef(null);
    const register=(e)=>{
       e.preventDefault();
       auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordlRef.current.value
       ).then((authUser)=>{
            console.log(authUser)
       }).catch((error)=>{
             alert(error.message)
       })
    }
    const signin=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordlRef.current.value
        ).then((authUser)=>{
            console.log(authUser)
        }).catch((error)=>{
              alert(error.message)
        })
    }
  return (
    <div className='signup'>
       <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email"placeholder='Email' />
        <input ref={passwordlRef} type='password' placeholder='Password'/>
        <button type='submit' onClick={signin}>Sign In</button>
        <h4>
            <span className='signup_gray'> New to Netflix?</span>
            <span className='signup_link' onClick={register}>Sign Up Now.</span> </h4>
       </form>
    </div>
  )
}

export default Signup
