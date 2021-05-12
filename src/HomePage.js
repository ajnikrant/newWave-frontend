import React, { useEffect, useState } from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList'
import Categories from './Categories'
import Filter from './Filter'


function HomePage({ filteredByCat, selectedCat, setSelectedCat, catClicked, setCatClicked, filterByPrice, filterChange, setFilterChange }){

    
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
            setFilterChange={setFilterChange}/>
            {/* <Filter listingsArr={listingsArr}/> */}
            {/* <ItemList filteredByCat={filteredByCat}/> */}
        </div>
    )
}

export default HomePage