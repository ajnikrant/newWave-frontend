import React from 'react';

function SaleDetails ({saleObj}){
    console.log(saleObj)
    return (
        <div>
            <h5>Item Purchased: {saleObj.listing.title}</h5>
            <ul>
                <li>Price: ${saleObj.price}</li>
                <li>Location Purchased: {saleObj.listing.location}</li>
                <li>Purchase Type: {saleObj.listing.barter? "Barter" : "Purchase"}</li>
            </ul>

        </div>
    )
}

export default SaleDetails