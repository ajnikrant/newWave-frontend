import React from 'react';
import { useLocation } from 'react-router-dom'

function ItemDetail(){
    const location = useLocation()
    
    const listingDetail = location.state.params

  
    return (
       <div>
           <br></br>
            <h1>{listingDetail.title}</h1>
            <img src={listingDetail.image} alt={listingDetail.title}/>
            <p>{listingDetail.description}</p>
            <p><strong>Price: </strong>${listingDetail.price}</p>
            <p><strong>Willing to trade for: </strong>{listingDetail.barter_description}</p>
            <p><strong>Located: </strong>{listingDetail.location}</p>
            <button>Message seller</button>
            <button>Update Listing</button>
            <button>Delete Listing</button>
       </div>

        

    )
}

export default ItemDetail