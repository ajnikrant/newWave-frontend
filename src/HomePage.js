import React, { useEffect, useState } from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList'
import Categories from './Categories'
import Filter from './Filter'
import CategoryCard from './CategoryCard';

function HomePage(){
    const [listingsArr, setListingsArr] = useState([])

    useEffect(()=>{
        fetch ('http://localhost:3000/listings')
        .then(r=> r.json())
        .then(setListingsArr)
        }, [])

    const instrumentCats = listingsArr.map(listing => {
        return listing.category
    })
    const uniqueCats = Array.from(new Set(instrumentCats))
    const catsArr = uniqueCats.map(cat => {
        return <CategoryCard key={cat} name={cat}/>
    })   
    
    return (
        <div>
            {catsArr}
            <ItemList listingsArr={listingsArr}/>
            <NewItemForm />
            <Categories listingsArr={listingsArr}/>
            <Filter listingsArr={listingsArr}/>
        </div>
    )
}

export default HomePage