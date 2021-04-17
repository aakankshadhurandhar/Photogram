//to interact with firebase storage
import {useEffect,useState} from 'react'
import { photoStorage,db,timestamp } from '../firebase/config' 




const useStorage=(file)=> {
    //progress of upload
    const[progress,setProgress]=useState(0);
    const[error,setError]=useState(null);
    //url of photo
    const[url,setUrl]=useState(null);

//to upload file and store in database.(this code needs to every time so use useeffect)
useEffect(() => {
   //references to a file inside a default firebase database

   const storageRef=photoStorage.ref(file.name);
   const noteref=db.collection('images');
   //asynchronous (fire only when something happens so on used)
   storageRef.put(file).on('state_changed',(snap)=>{

        //figure out percentage of upload
        let percentage=(snap.bytesTransferred/snap.totalBytes)*100;
        setProgress(percentage);


   },(err)=>{
    //fires when error occurs
    setError(err);


   },
   //fire when upload complete

//get the url og image being uploaded
async()=>{
    const url=await storageRef.getDownloadURL();
    const createdAt=timestamp();
    //add in database 
    noteref.add({
        url:url,
        createdAt
    })
    setUrl(url);

})
}, [file])
//fire everytime dependency changes



return {progress,url,error};


}
export default useStorage;


