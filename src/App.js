import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js'
import Feed from './Feed.js'
import Login from './Login.js'
import {useDispatch, useSelector} from 'react-redux';
import {selectUser, login, logout} from './features/userSlice.js';
import {auth, createUserWithEmailAndPassword, updateProfile} from './firebase'
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      setTimeout(() => setLoading(false), 750)
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }));
      }
      else{
        dispatch(logout());
      }
    });
  }, [])
  return (
    <div className="app">
      <Header />
      {loading ? '': 
      !user ? (<Login/>) : (
        <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
      )}
      {/* {!user ? (<Login/>) : (
        <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
      )} */}
      
    </div>
  );
}

export default App;
