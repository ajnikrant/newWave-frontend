import React from 'react';
import ItemCard from './ItemCard';

function ItemList({ filteredByCat, removeDeleted }){

    const listings = () => (filteredByCat.map(listing => <ItemCard key={listing.id} listing={listing} removeDeleted={removeDeleted}/>))

 
    return (
       <div className="itemList">
           {filteredByCat && listings()}
       </div>
    )
}

export default ItemList