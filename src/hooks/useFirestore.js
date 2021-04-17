//for displaying images from firestore/databse
import  { useEffect, useState } from 'react'
import { db } from '../firebase/config'

const  useFirestore=(collection)=> {
    const[docs,setDocs]=useState([]);
    
   useEffect(() => {
    const unsub=db.collection(collection)
    .orderBy('createdAt','desc')
    .onSnapshot((snap)=>{
    let documents=[];
    //cycle for each'
    snap.forEach(doc=>{
        //push data
        documents.push({
            ...doc.data(),
            id:doc.id,




        });
       



    });
    setDocs(documents);
    
    
     });
return()=>unsub();
//unsubscribe when function no longer used
       
   }, [collection])




    return { docs };
}

export default useFirestore
