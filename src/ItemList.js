import React from 'react';
import ItemCard from './ItemCard';

function ItemList({ filteredByCat }){

    const listings = () => (filteredByCat.map(listing => <ItemCard key={listing.id} listing={listing} />))

 
    return (
       <div className="itemList">
           {filteredByCat && listings()}
       </div>
    )
}

export default ItemList