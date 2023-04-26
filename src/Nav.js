import React, { useEffect, useState } from 'react'
import './Nav.css';
import {useNavigate} from'react-router-dom'

function Nav() {
    const[show,setShow]=useState(false);
    const history=useNavigate();
    const transitionNavbar=()=>{
        if(window.scrollY>100){
            setShow(true);
        }else{
            setShow(false);
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',transitionNavbar);
        return()=>window.removeEventListener('scroll',transitionNavbar);
    },[])
  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className="nav_content">
            <img 
             onClick={()=>history(`/`)}
            className='nav_logo' src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' 
             alt=''/>
             <img 
             onClick={()=>history(`./profile`)}
             className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
      
        </div>
       
    </div>
  )
}

export default Nav
