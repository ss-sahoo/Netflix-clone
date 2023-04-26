import React from 'react';
import './Profile.css'
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

function ProfileScreen() {
  const user=useSelector(selectUser)
  return (
    <div className='profilescreen'>
      <Nav/>
      <div className="profile_body">
        <h1>Edit Profile</h1>
        <div className="profile_info">
           <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
           <div className="profile_details">
            <h2>{user.email}</h2>
            <div className="profile_plans">
              <h3>Plans(Current Plan:Premium)</h3>
              <div className="plan">
                 <div className="plan1"> 
                  <p>Netflix Standard</p>
                  <button>Subscribe</button>
                  </div>
                  <div className="plan2"> 
                  <p>Netflix Basic</p>
                  <button>Subscribe</button>
                  </div>
                  <div className="plan3"> 
                  <p>Netflix Premium</p>
                  <button>Continue Plan</button>
                  </div>
              
              </div>
              <button onClick={()=>auth.signOut()} className='profile_signout'>Sign Out</button>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
