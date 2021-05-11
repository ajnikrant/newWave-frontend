import React from 'react';

function CategoryCard({ name, selectedCat, setSelectedCat }){
    function handleCategoryClick(e) {
        setSelectedCat(e.target.alt)
    }
    
    
    return (
        <div onClick={handleCategoryClick} >
            <h2>{name}</h2>
            <img src="https://www.roadiemusic.com/blog/wp-content/uploads/2017/12/Manzer-Guitars-instrument-photo-1-1.jpg" alt={name} />
        </div>
    )
}

export default CategoryCard