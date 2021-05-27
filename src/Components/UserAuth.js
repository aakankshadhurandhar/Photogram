import React, { useState,useEffect } from 'react';
import { auth } from './../firebase/config';
import Login from './Login/Login';
import MainContent from './MainContent/MainContent';

const UserAuth = () => {

    // useState
     const [user, setUser] =useState('');
     const [email, setEmail] =useState('');
     const [password, setPassword] = useState('');
     const [emailError, setEmailError] = useState('');
     const [passwordError, setPasswordError] = useState('');
     const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const loginHandler = () => {
        clearErrors();
        auth.signInWithEmailAndPassword(email,password)
        // .then(cred => console.log('cred' + cred.user.uid))
        .catch((err) => {
            switch (err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
                default:
                    console.log('');
                    break;
            }
        });
        
    }

    const signUpHandler = () => {
        clearErrors();
        auth.createUserWithEmailAndPassword(email,password)
        .catch((err) => {
            switch (err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
                default:
                    console.log('');
                    break;
            }
        });
    };

    const logoutHandler = () => {
        auth.signOut();
    }


    useEffect(() => {       
        //to get the user by setting observer 
        auth.onAuthStateChanged((user) => {
            if(user){
                // if user sign in
                clearInputs();
                setUser(user)
            }else{
                setUser('')
            }
        })
    },[]);


    


    return(
        <div>
            {user 
            ?(
                <MainContent 
                    logoutHandler = {logoutHandler}/>
            ):(
                <Login 
                email = {email}
                setEmail = {setEmail}
                password = {password}
                setPassword = {setPassword}
                loginHandler = {loginHandler}
                signUpHandler = {signUpHandler}
                hasAccount = {hasAccount}
                setHasAccount = {setHasAccount}
                emailError = {emailError}
                passwordError = {passwordError}
               
                />  
            )}

        </div>
    );
}

export default UserAuth;