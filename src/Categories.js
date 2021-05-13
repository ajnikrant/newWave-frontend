import React, {useState} from 'react';
import CategoryCard from './CategoryCard';
import Filter from './Filter';
import ItemList from './ItemList';

function Categories({ filteredByCat, selectedCat, setSelectedCat, catClicked, setCatClicked, filterByPrice, setFilterChange, setSaleChange, saleTypeSelection}){
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
        // <>
        // <br></br><br></br>
         <main id="carousel">
             {catClicked ? <h1 className="categoryTitle">{selectedCat}</h1> : null}
            {catClicked ? <Filter  filterByPrice={filterByPrice} setFilterChange={setFilterChange} setSaleChange={setSaleChange} saleTypeSelection={saleTypeSelection} filteredByCat={filteredByCat}/> : null}
            {catClicked ? <ItemList filteredByCat={filteredByCat} /> : null}
            {catsArr}
        </main>           
        // </>
    )
}

export default Categories