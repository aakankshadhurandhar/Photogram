//to upload img

import React, { useState } from 'react'
import {Alert} from 'react-bootstrap'
import ProgressBar from './ProgressBar'
function UploadForm() {
    const[file,setFile]=useState(null);
    const[error,setError]=useState(null);
    const changeHandler=(e)=>{
    const types=['image/png','image/jpeg'];
        let selected=e.target.files[0];
        if(selected && types.includes(selected.type)){
            //checking if img or not
            setError(null);
            setFile(selected );

        }
        else{
            setFile(null);
            setError('Select a image(png/jpeg) file')
        }
    }
    return (
        <div>
            
            <form>
                <label>
                <input type="file" onChange={changeHandler}/>
                <span style={{color:"#e94560"}}>+</span>
                </label>
                {error && <Alert variant="danger">{error}</Alert>}
                <div className="output">
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}

                </div>

            </form>
        </div>
    )
}

export default UploadForm
