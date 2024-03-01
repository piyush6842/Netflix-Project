import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';
import { NetflixLogo } from '../utils/Constants';
import { toggleGPTSearchView } from '../utils/GPTSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleToggleButton = ()=>{
    dispatch(toggleGPTSearchView());
  }
  const showGPTSearch = useSelector(store=>store.GPT.showGPTSearch);
  const user = useSelector((store)=> store.user);

  const handleSignOut = ()=>{
    signOut(auth)
      .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      navigate("/error");
      // An error happened.
    });
  }
  useEffect(()=>{
    const unsubscribe  = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, displayName, email, photoURL} = user;
        dispatch(addUser({ uid:uid , displayName:displayName, email:email, photoURL : photoURL }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return ()=> unsubscribe();
  },[])
  return (
    <div className='fixed md:absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-40 md:mx-0' alt='logo' src={NetflixLogo}></img>

        {user && <div className='m-4 flex'>
          <button onClick={handleToggleButton}
           className='bg-black text-white border px-4 hover:opacity-50 mr-2 rounded-sm font-bold'>
            {showGPTSearch? "Home Page" : "Search"}
          </button> 
          <img alt='userlogo'
          className='w-7 md:w-10 h-7 md:h-10 mt-[2px] md:mt-0'
          src={user.photoURL}>
          </img>
          <button onClick={handleSignOut}
          className='text-white px-1 md:px-2 font-bold hover:underline h-4 md:h-6 mt-0 md:mt-2'>
          Sign out</button>
        </div>}
    </div>
  )
}

export default Header;
