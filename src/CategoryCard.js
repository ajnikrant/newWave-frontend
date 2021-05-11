import React from 'react';

function CategoryCard({ name, selectedCat, setSelectedCat, catClicked, setCatClicked}){
    function handleCategoryClick(e) {
        setSelectedCat(e.target.alt)
        setCatClicked(true)
    }
    
    
    return (
        <>
        {!catClicked ? <div onClick={handleCategoryClick} >
                <h2>{name}</h2>
                <img src="https://www.roadiemusic.com/blog/wp-content/uploads/2017/12/Manzer-Guitars-instrument-photo-1-1.jpg" alt={name} />
            </div> : null}
        </>
    )
}

export default CategoryCard