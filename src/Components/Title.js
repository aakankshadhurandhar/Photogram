import { Button, Grid } from '@material-ui/core'
import React from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../firebase/config'
import Login from './Login'
function Title() {
  const [user]=useAuthState(auth)

  const signOut = async () => {
    await auth.signOut();
  };
    return (
        <div className="title">
        <Grid container justify="space-between" alignItems="center">
        <Grid>
          <h1>Photogram</h1>
        </Grid>
        <Grid>
          {user ? <Button onClick={signOut}
          style={{color:"#e94560",
          backgroundColor:"#0f3460"}}
          >LogOut</Button> : <Login />}
        </Grid>
      </Grid>
      
      <h2>Share your memories</h2>
      
         
  
     
        </div>
    )
}

export default Title
