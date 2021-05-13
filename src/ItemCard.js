import React from 'react';
import { useHistory } from 'react-router-dom'
import ItemDetail from './ItemDetail';


function ItemCard({ listing }){
    const { title, price, description, user_id, category, id, barter, for_sale, barter_description, image, location } = listing
    const history = useHistory()

    function handleItemClick() {
        history.push(`/listings/${id}`, { params: listing })
    }

    return (
     
        <div className="card">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Price: {price}</p>
                <p className="card-text">For sale: {for_sale ? "Yes" : "No"}</p>
                <p className="card-text">Open to trade: {barter ? "Yes" : "No"}</p>
                <p className="card-text">{barter ? "Open to trade for: " + barter_description : null}</p>
                <button id="moreBtn" onClick={handleItemClick}>See more details</button>
                
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>

        

    )
}

export default ItemCard

// this is the "x" button for closing views
                {/* <button type="button" class="btn-close" aria-label="Close"></button> */}
