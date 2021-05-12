import React, {useState} from 'react';
import CategoryCard from './CategoryCard';
import Filter from './Filter';
import ItemList from './ItemList';

function Categories({ filteredByCat, selectedCat, setSelectedCat, catClicked, setCatClicked, filterByPrice, filterChange, setFilterChange }){
    // const [catClicked, setCatClicked] = useState(false)

    const instrumentCats = filteredByCat.map(listing => {
        return listing.category
    })
   
    const uniqueCats = Array.from(new Set(instrumentCats))
    const allCats = [...uniqueCats, "All"]

    const catsArr = allCats.map(cat => {
        return <CategoryCard key={cat} name={cat} selectedCat={selectedCat} setSelectedCat={setSelectedCat} catClicked={catClicked} setCatClicked={setCatClicked}/>
    })  

        
    return (
        <>
        <br></br><br></br>
            {catClicked ? <Filter filteredByCat={filteredByCat} filterByPrice={filterByPrice} filterChange={filterChange} setFilterChange={setFilterChange}/> : null}
            {catClicked ? <ItemList filteredByCat={filteredByCat}/> : null}
            {catsArr}
        </>
    )
}

export default Categories