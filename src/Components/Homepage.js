import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import Imagegrid from './Imagegrid';
import Modal from './Modal';
import Title from './Title';
import UploadForm from './UploadForm';

function Homepage() {
    const[selected,setSelected]=useState(null);
    const[user]=useAuthState(auth)
    return (
        <div className="homepage">
            <Title />
       
        {user && <UploadForm />}
        <Imagegrid setSelected={setSelected}/>

      {selected && <Modal selected={selected} setSelected={setSelected} />}
      
        </div>
    )
}

export default Homepage
