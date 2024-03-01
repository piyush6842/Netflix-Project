import React, { useRef, useState } from 'react'
import Header from './Header'
import { Validate } from '../utils/Validate';
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/UserSlice';
import { MoviesImage, UserLogo } from '../utils/Constants';

const Login = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  const [signInButton , setsignInButton] = useState(true);
  const [errorMessage,setErrorMesage] = useState(null);
  const handleClickButton = ()=>{
    const message = Validate( email.current.value, password.current.value );
    setErrorMesage(message);

    if(message) return;
    if(!signInButton){
      // for sign up form
      createUserWithEmailAndPassword( auth, email.current.value, password.current.value )
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
          photoURL:  UserLogo ,
        }).then(() => {
          // Profile updated!
          const {uid, displayName, email, photoURL} = auth.currentUser;
        dispatch(
          addUser(
            { uid:uid ,
              displayName:displayName,
              email:email,
              photoURL : photoURL 
            }));
        }).catch((error) => {
          // An error occurred
          setErrorMesage(error.message);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMesage((errorCode)+"-"+(errorMessage));
      });
    }
    else{
      // for sign in form
      signInWithEmailAndPassword(auth, email.current.value, password.current.value )
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMesage((errorCode)+"-"+(errorMessage));

  });
    }
  }
  const toggleButton = ()=>{
    setsignInButton(!signInButton);
  };
  return (
    <div>
      <Header />
      <div className='absolute'>
      <img
       className='h-screen object-cover md:w-screen'
       alt='' 
       src={MoviesImage}>
       </img>
      </div>
      <form onSubmit={(e)=>e.preventDefault()}
      className='w-2/3 md:w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-sm'>
        <h1 className='font-bold text-3xl my-4'>
          {signInButton ? "Sign In"  : "Sign Up" }
          </h1>

          {!signInButton && <input ref={name} className='p-2 m-2 rounded-md w-full bg-gray-800 border border-white'
           type='text'
           placeholder='Full Name'>
          </input>}

        <input ref={email} 
         className='p-2 m-2 rounded-md w-full bg-gray-800 border border-white'
         type='email'
         placeholder='E-mail or phone number' >
        </input>

        <input ref={password} 
         className='p-2 m-2 rounded-md w-full bg-gray-800 border border-white'
         type='password' 
         placeholder='Enter Your Password'>
         </input>
        <p className='text-red-700 font-bold py-2'>{errorMessage}</p>

        <button className='rounded-md p-2 m-2 w-full bg-red-600 hover:underline'
         onClick={handleClickButton}>
          {signInButton ? "Sign In"  : "Sign Up" }
          </button>
        <p className='m-4 cursor-pointer hover:underline' onClick={toggleButton}>
        {signInButton ? "New to Netflix? Sign up now"  : "Already a member? Sign In" }
        </p>
      </form>
    </div>
  )
}

export default Login
