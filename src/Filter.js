import React from 'react';

function Filter({  filterByPrice, setFilterChange, setSaleChange, saleTypeSelection}){
    
    
    function handlePriceFilterChange(e) {
        setFilterChange(e.target.value)
        // filterByPrice()
    }
    
   function handleSaleToggle(e) {
        setSaleChange(e.target.value)
        saleTypeSelection()
   }

    return (
        <div className="filterDiv">
            <label>Sort by price: </label>
            <select className="select" onChange={handlePriceFilterChange}>
                <option value="---">---</option>
                <option value="Low">Low to High</option>
                <option value="High">High to Low</option>
            </select>
            <label> Sort by sale/trade: </label>
            <select className="select" onChange={handleSaleToggle}>
                <option value="all">All</option>
                <option value="for_sale">For Sale</option>
                <option value="barter">Open To Trade</option>
            </select>
        </div>
    )
}

export default Filter