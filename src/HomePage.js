import React, { useEffect, useState } from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList'
import Categories from './Categories'
import Filter from './Filter'


function HomePage(){
    const [listingsArr, setListingsArr] = useState([])
    const [selectedCat, setSelectedCat] = useState("all")

    useEffect(()=>{
        fetch ('http://localhost:3000/listings')
        .then(r=> r.json())
        .then(setListingsArr)
        }, [])

    const filteredByCat = listingsArr.filter(listing => {
        if (selectedCat === "all") {
            return listing
        } else if (listing.category === selectedCat) {
            return listing
        }
    })
    console.log(filteredByCat)

    
    return (
        <div>
            <NewItemForm />
            <Categories filteredByCat={filteredByCat} selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
            <Filter listingsArr={listingsArr}/>
            <ItemList filteredByCat={filteredByCat}/>
        </div>
    )
}

export default HomePage