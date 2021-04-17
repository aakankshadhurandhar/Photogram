//for seeing a progress of upload
import React,{useEffect} from 'react'
import useStorage from '../hooks/useStorage'


const ProgressBar=({ file,setFile })=>{
    //fire the useeffect thing in usestorage.js and upload the image
    const { url,progress }=useStorage(file);
    //when the file of url changes
    useEffect(() => {
        if(url)
        {
            setFile(null);
            //so no progress bar will be shown 
        }
    }, [url,setFile])
return(
    <div className="progress-bar"
    style={{ width:progress+'%' }}
    
    ></div>
)

}
export default ProgressBar;

