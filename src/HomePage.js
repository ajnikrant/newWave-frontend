import React, { useEffect, useState } from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList'
import Categories from './Categories'
import Filter from './Filter'


function HomePage({ filteredByCat, selectedCat, setSelectedCat, listingsArr, catClicked, setCatClicked}){

    
    return (
        <div>
            <Categories filteredByCat={filteredByCat} selectedCat={selectedCat} setSelectedCat={setSelectedCat} catClicked={catClicked} setCatClicked={setCatClicked}/>
            {/* <Filter listingsArr={listingsArr}/> */}
            {/* <ItemList filteredByCat={filteredByCat}/> */}
        </div>
    )
}

export default HomePage