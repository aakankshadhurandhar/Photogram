//for displaying images from firestore/databse
import  { useEffect, useState } from 'react'
import { db,auth } from '../firebase/config'

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        db.collection(collection)
            .where('uid', '==', auth.currentUser.uid)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => { 
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id});
                });
                setDocs(documents);
            });
    }, [collection])
    
    return { docs };
}

export default useFirestore;