import React from 'react';
import CategoryCard from './CategoryCard';
import Filter from './Filter';

function Categories({ filteredByCat, selectedCat, setSelectedCat }){

    const instrumentCats = filteredByCat.map(listing => {
        return listing.category
    })
    const uniqueCats = Array.from(new Set(instrumentCats))

    const catsArr = uniqueCats.map(cat => {
        return <CategoryCard key={cat} name={cat} selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
    })   
    
    
    return (
        <>
            <Filter />
            {catsArr}
        </>
    )
}

export default Categories