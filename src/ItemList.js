import React from 'react';
import ItemCard from './ItemCard';

function ItemList({ listingsArr }){

    const listings = listingsArr.map(listing => {
        return <ItemCard key={listing.id} listing={listing}/>
    })
    return (
       <div className="itemList">
           {listings}
       </div>
    )
}

export default ItemList