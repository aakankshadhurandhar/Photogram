import React, { useState } from "react";
import { auth, firebase, db } from "../firebase/config";
import { Button } from "@material-ui/core";

export default function LoginButton() {
  const [error, seterror] = useState(null);

  const signInWithGoogle = (e) => {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        var user = result.user;
        console.log(user);
        var token = credential.accessToken;
        console.log(token);
        
        db.collection("userGitGram").doc(user.uid).set({
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
          uid: user.uid,
        });

        // The signed-in user info.
        seterror(null);

        // ...
      })
      .catch((err) => {
        seterror(err);

        console.log(error);
      });
  };
  return <Button onClick={signInWithGoogle}
  style={{color:"#e94560",
backgroundColor:"#0f3460"}}>Login to Post</Button>;
}
