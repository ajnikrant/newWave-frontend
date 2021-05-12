import React from 'react';
import Categories from './Categories'


function HomePage({ filteredByCat, selectedCat, setSelectedCat, catClicked, setCatClicked, filterByPrice, filterChange, setFilterChange, setSaleChange, saleTypeSelection }){

    
    return (
        <div>
            <Categories 
            filteredByCat={filteredByCat} 
            selectedCat={selectedCat} 
            setSelectedCat={setSelectedCat} 
            catClicked={catClicked} 
            setCatClicked={setCatClicked} 
            filterByPrice={filterByPrice}
            filterChange={filterChange}
            setFilterChange={setFilterChange}
            setSaleChange={setSaleChange}
            saleTypeSelection={saleTypeSelection}/>
            {/* <Filter listingsArr={listingsArr}/> */}
            {/* <ItemList filteredByCat={filteredByCat}/> */}
        </div>
    )
}

export default HomePage