//for seeing a progress of upload
import React,{useEffect} from 'react'
import useStorage from '../../hooks/useStorage'
import { motion } from'framer-motion';
import './Progressbar.css';
const ProgressBar=({ file,setFile })=>{
    //fire the useeffect thing in usestorage.js and upload the image
    const {url, progress} = useStorage(file);

    useEffect( () => {
        if(url){
            setFile(null);
        }
    }, [url, setFile] )

    return( 
    <motion.div className = 'progress-bar'
    initial={{ width: 0 }}
    animate={{ width: progress + '%' }}></motion.div>
    )

}
export default ProgressBar;

