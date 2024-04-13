import React, { useEffect } from 'react';
import './App.css';
import Sideabar from './components/sideabar';
import Chat from './components/chat';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import Login from './login';
import { auth } from './components/firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/userSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);


  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('The user is >>> ', authUser);
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        dispatch(logout());
      }
    })
  }, [dispatch]);

  return (
    <div className="app">
       {user ? (
         <>
           <Sideabar />
           <Chat />
         </>
       ) : (
         <Login />
       )}

    </div>
  );
}

export default App;
