import React from 'react';

function ItemCard({ listing }){
    const { title, price, description, user_id, category, id, barter, for_sale, barter_description, image, location } = listing
    return (
        <div className="itemCard">
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <p>{description}</p>
            <p>${price}</p>
            <p>Located at: {location}</p>
        </div>
    )
}

export default ItemCard