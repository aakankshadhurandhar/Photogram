import React from 'react';
import './Title.css';
import {ExitToApp} from '@material-ui/icons';
import {Camera} from '@material-ui/icons';

const Title = ({logoutHandler}) => {
    return(
        <div className = "title">
            <h2 className = 'capture_title'>Your Pictures
                <Camera style = {{fontSize : '50px'}} />
            </h2>
            <ExitToApp style = {{fontSize : '50px', cursor : 'pointer'}} onClick = {logoutHandler}/>
        </div>
    )
}

export default Title;