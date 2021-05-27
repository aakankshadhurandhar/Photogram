import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import { motion } from 'framer-motion';
import './ImageGrid.css'
import {db} from '../../firebase/config';
import { DeleteSharp } from '@material-ui/icons';


const ImageGrid = ( {setSelectedImg} ) => {

    const { docs } = useFirestore('images');

    return(
        <div className='img-grid'>
            {
                docs && docs.map(doc => (
                    <motion.div className = 'img-wrap' key = {doc.id}
                        layout
                        whileHover = {{ opacity : 1 }}
                        onClick = { () => setSelectedImg(doc.url)}>
                        <img src={doc.url} alt = 'uploaded_pic' />

                        <div  className = 'delete_btn' onClick = { (event) => {
                            event.stopPropagation();
                            db.collection('images').doc(doc.id).delete()}}>

                            <DeleteSharp 
                            style={{ fontSize: '40px' , cursor: 'pointer', color : '#F87171'}} />
                        </div>

                    </motion.div>
                ))
            }
        </div>
    )
}

export default ImageGrid;
