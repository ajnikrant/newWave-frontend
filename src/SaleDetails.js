import React from 'react';

function SaleDetails ({saleObj}){
    console.log(saleObj)
    return (
        <div>
            <h3>{saleObj.id}</h3>
            <h3>Price: {saleObj.price}</h3>

        </div>
    )
}

export default SaleDetails