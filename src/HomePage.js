import React from 'react';
import Categories from './Categories'



function HomePage({ filteredByCat, selectedCat, setSelectedCat, catClicked, setCatClicked, filterByPrice, filterChange, setFilterChange, setSaleChange, saleTypeSelection}){

    
    return (
        <>
        
        {!catClicked ? <div id="homepage">
            <br></br>
           <h1>Welcome to newWave!</h1>
            <br></br>
            <h3>Buy Instruments. Trade Instruments. Make Music. </h3>
            <body>
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                    <Categories 
                    filteredByCat={filteredByCat} 
                    selectedCat={selectedCat} 
                    setSelectedCat={setSelectedCat} 
                    catClicked={catClicked} 
                    setCatClicked={setCatClicked} 
                    filterByPrice={filterByPrice}
                    filterChange={filterChange}
                    setFilterChange={setFilterChange}
                    setSaleChange={setSaleChange}
                    saleTypeSelection={saleTypeSelection}/>
            </body>
            </div> : <Categories 
                        filteredByCat={filteredByCat} 
                        selectedCat={selectedCat} 
                        setSelectedCat={setSelectedCat} 
                        catClicked={catClicked} 
                        setCatClicked={setCatClicked} 
                        filterByPrice={filterByPrice}
                        filterChange={filterChange}
                        setFilterChange={setFilterChange}
                        setSaleChange={setSaleChange}
                        saleTypeSelection={saleTypeSelection}/>}
        </>
    )
}












export default HomePage