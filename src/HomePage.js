import React, { useEffect, useState } from 'react';
import NewItemForm from './NewItemForm';
import ItemList from './ItemList'
import Categories from './Categories'
import Filter from './Filter'

function HomePage(){
    const [listingsArr, setListingsArr] = useState([])

    useEffect(()=>{
        fetch ('http://localhost:3000/listings')
        .then(r=> r.json())
        .then(setListingsArr)
        }, [])
        console.log(listingsArr)
    
    return (
        <div>
            <ItemList listingsArr={listingsArr}/>
            <NewItemForm />
            <Categories />
            <Filter />
        </div>
    )
}

export default HomePage