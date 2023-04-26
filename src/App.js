import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screen/HomeScreen';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Login from './screen/Login';
import { auth } from './firebase';
import {useDispatch,useSelector} from 'react-redux'
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screen/ProfileScreen';
 
function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch()
  useEffect(()=>{
    const unsubcribe=auth.onAuthStateChanged(userAuth=>{
        if(userAuth){
          dispatch(login({
            uid:userAuth.uid,
            email:userAuth.email
          }))
        }else{
           dispatch(logout())
        }
    })
    return unsubcribe;
  },[dispatch])
  return (
     < div className="app">
  
   
       <Router>
        {!user?(
          <Login/>
        ):(
        <Routes>
          <Route exact path="/profile" element={<ProfileScreen/>}/>
          <Route exact path="/" element={<HomeScreen/>}/>
          
        
        </Routes>
       )}
    </Router>
   
    </div>
  );
}

export default App;
