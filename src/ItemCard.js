import React from 'react';

function ItemCard({ listing }){
    const { title, price, description, user_id, category, id, barter, for_sale, barter_description, image, location } = listing
    return (
        // <div className="itemCard">
        //     <h3>{title}</h3>
        //     <img src={image} alt={title} />
        //     <p>{description}</p>
        //     <p>${price}</p>
        //     <p>Located at: {location}</p>
        // </div>

        <div className="card">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Price: {price}</p>
                <p className="card-text">Location: {location}</p>
                <p className="card-text">Description: {description}</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
        </div>

        

    )
}

export default ItemCard

// this is the "x" button for closing views
                {/* <button type="button" class="btn-close" aria-label="Close"></button> */}
