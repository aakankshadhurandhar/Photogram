import React from 'react';
import { motion } from 'framer-motion';
import './Modal.css';

const Modal = ( { selectedImg , setSelectedImg } ) => {

    const clickHandler = (event) => {
        if(event.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }

    return(
        <motion.div className='backdrop' onClick = {clickHandler}
            initial = {{ opacity: 0}}
            animate = {{ opacity: 1}}>

            <motion.img src= {selectedImg} alt = "enlarged_pic"
            initial = { {y: "-100vh"}}
            animate = { {y: 0}} 
            />
        </motion.div>
    )
}

export default Modal;