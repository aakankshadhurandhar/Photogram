import React from "react";




import './Login.css'


    const Login = ({ email,setEmail,password,setPassword,loginHandler,signUpHandler,hasAccount,setHasAccount,emailError,passwordError}) => {
    return(

        <div className = 'outer-div-login'>
            

            <div className = 'login'>

                <p className = 'heading'>Welcome to PhotoGram</p>


                <input type = 'email' value = {email} placeholder = 'Email' required onChange = {(event) => setEmail(event.target.value)}/>
                <p className = 'error'>{emailError}</p>

                <input type = 'password' placeholder = 'Password' required value ={password} onChange={(event) => setPassword(event.target.value)}/>
                <p className = 'error'>{passwordError}</p>

                    {hasAccount ? (
                        <>
                        <button className = 'button' onClick={loginHandler}>Sign In</button>
                        <p className = 'para'>Don't have account? <span className = 'bold' onClick = {() => setHasAccount(!hasAccount) }>Sign Up</span></p>
                        </>
                    ):(
                        <>
                        <button className = 'button'  onClick = {signUpHandler}>Sign Up</button>
                        <p className = 'para'>Have an account? <span className = 'bold' onClick = {() => setHasAccount(!hasAccount) }>Sign In</span></p>
                        </>
                    )}

               
            </div>
        </div>
        
    )
}

export default Login;
