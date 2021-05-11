import React, {useState} from 'react';

function Filter({ filteredByCat }){
    const [filterChange, setFilterChange] = useState("---")
    
    function handlePriceFilterChange(e) {
        setFilterChange(e.target.value)
    }
    
    // function filterByPrice() {
    //     if (filterChange ===)
    // }

    return (
        <div>
            <label>Sort by price: </label>
            <select onChange={handlePriceFilterChange}>
                <option value="---">---</option>
                <option value="Low">Low to High</option>
                <option value="High">High to Low</option>
            </select>
            <label> Sort by sale/trade: </label>
            <select>
                <option>---</option>
                <option>Sale only</option>
                <option>Trade only</option>
            </select>
        </div>
    )
}

export default Filter