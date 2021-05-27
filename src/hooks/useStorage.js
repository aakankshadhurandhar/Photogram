//to interact with firebase storage
import {useEffect,useState} from 'react'
import { photoStorage,db,timestamp, auth } from '../firebase/config' 




const useStorage = (file) => {

    // const [UniqueId,setUniqueId] = useState('');
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect( () => {

        // references
        const storageRef = photoStorage.ref(file.name);
        const collectionRef = db.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (error) => {
            setError(error);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdat = timestamp;
            const uid = auth.currentUser.uid;
            collectionRef.add({url, createdat , uid})
            setUrl(url);
        })

    }, [file] );

    return { progress , error , url }; 
}

export default useStorage;