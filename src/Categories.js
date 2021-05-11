import React, {useState} from 'react';
import CategoryCard from './CategoryCard';
import Filter from './Filter';
import ItemList from './ItemList';

function Categories({ filteredByCat, selectedCat, setSelectedCat, catClicked, setCatClicked }){
    // const [catClicked, setCatClicked] = useState(false)

    const instrumentCats = filteredByCat.map(listing => {
        return listing.category
    })
   
    const uniqueCats = Array.from(new Set(instrumentCats))

    const catsArr = uniqueCats.map(cat => {
        return <CategoryCard key={cat} name={cat} selectedCat={selectedCat} setSelectedCat={setSelectedCat} catClicked={catClicked} setCatClicked={setCatClicked}/>
    })  

    
        
    return (
        <>
        <br></br><br></br>
            {!catClicked ? <CategoryCard name="All" /> : null}
            {catClicked ? <Filter filteredByCat={filteredByCat}/> : null}
            {catClicked ? <ItemList filteredByCat={filteredByCat}/> : null}
            {catsArr}
        </>
    )
}

export default Categories