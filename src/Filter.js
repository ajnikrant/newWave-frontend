import React from 'react';

function Filter({ filteredByCat, filterByPrice, filterChange, setFilterChange }){
    // const [filterChange, setFilterChange] = useState("---")
    
    // function handlePriceFilterChange(e) {
    //     setFilterChange(e.target.value)
    //     // filterByPrice(filterChange)
    // }

    function handlePriceFilterChange(e) {
        // setFilterChange(e.target.value)
        if (e.target.value === "Low") {
            const priceSortedArr = filteredByCat.sort((a,b) => b.price - a.price )
            setFilterChange(priceSortedArr)
          } else if (e.target.value === "High") {
            const priceSortedArr = filteredByCat.sort((a,b) => a.price - b.price )
            setFilterChange(priceSortedArr)

          }
        //   else if (e.target.value === "---") {
        //     const priceSortedArr = filteredByCat.sort((a,b) => a.price - b.price )
        //     setFilterChange(priceSortedArr)

        //   }
    }
    
    // function filterByPrice(filterChange) {
    //     if ( filteredByCat ) {
    //       if (filterChange === "Low") {
    //         const priceSortedArr = filteredByCat.sort((a,b) => b.price - a.price )
    //         setListingsArr(priceSortedArr)
    //       } else if (filterChange === "High") {
    //         const priceSortedArr = filteredByCat.sort((a,b) => a.price - b.price )
    //         setListingsArr(priceSortedArr)
    //       }
    //       // else {
    //       //   const priceSortedArr = filteredByCat
    //       //   setListingsArr(priceSortedArr)
    //       // }
    //   }
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