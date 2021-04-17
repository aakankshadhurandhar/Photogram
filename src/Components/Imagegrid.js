import React from 'react'
import useFirestore from '../hooks/useFirestore'

function Imagegrid({ setSelected }) {
    const {docs} =useFirestore('images');
    return (
        <div className="image_grid">
            {docs && docs.map(doc=>(
                <div className="img-grid">
                    { docs && docs.map(doc=>(
                        <div className="img-wrap" key={doc.id}
                        onClick={()=>setSelected(doc)}
                        
                        
                        >
                        <img src={doc.url} alt="uploaded img"/>


                        </div>

                    ))}
                </div>


            ))}
        </div>
    )
}

export default Imagegrid
