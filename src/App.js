import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom'
import Banner from './Banner'
import NavBar from './NavBar'
import HomePage from './HomePage'
import Profile from './Profile'
import NewItemForm from './NewItemForm';
import ItemList from './ItemList'
import ItemDetail from './ItemDetail'

function App() {
  const[profileDetails, setProfileDetails] = useState({})
  const [listingsArr, setListingsArr] = useState([])
  const [selectedCat, setSelectedCat] = useState("All")
  const [catClicked, setCatClicked] = useState(false)
  const [filterChange, setFilterChange] = useState("---")
  const [saleChange, setSaleChange] = useState("all")
  

  useEffect(()=>{
      fetch ('http://localhost:3000/listings')
      .then(r=> r.json())
      .then(setListingsArr)
      }, [])

  const filteredByCat = listingsArr.filter(listing => {
      if (selectedCat === "All") {
          return listing
      } else if (listing.category === selectedCat) {
          return listing
      }
  })
 

  useEffect(()=>{
    fetch('http://localhost:3000/users/2')
    .then(r => r.json())
    .then(setProfileDetails)
  },[])

  function addNewItem(newItemObj){
    setListingsArr([...listingsArr, newItemObj])
  }

  function filterByPrice() {
      if (filterChange === "Low") {
        const priceSortedArr = filteredByCat.sort((a,b) => a.price - b.price )
        return priceSortedArr
      } else if (filterChange === "High") {
        const priceSortedArr = filteredByCat.sort((a,b) => b.price - a.price )
        return priceSortedArr
      } 
        return filteredByCat
}



  function saleTypeSelection() {
    if (saleChange === "for_sale") {
       const newArr = filteredByCat.filter(listing => (listing.for_sale === true))
      return newArr
    } else if (saleChange === "barter") {
       const newArr = filteredByCat.filter(listing => (listing.barter === true))
      return newArr
    }
    return filteredByCat
  }


  return (
    <div>
      <Banner />
      <NavBar catClicked={catClicked} setCatClicked={setCatClicked} setSelectedCat={setSelectedCat}/>
      <Switch>
        <Route exact path="/">
          <HomePage 
          filteredByCat={saleTypeSelection()} 
          selectedCat={selectedCat} 
          setSelectedCat={setSelectedCat} 
          catClicked={catClicked} 
          setCatClicked={setCatClicked}
          filterByPrice={filterByPrice}
          filterChange={filterChange}
          setFilterChange={setFilterChange}
          setSaleChange={setSaleChange}
          saleTypeSelection={saleTypeSelection}/>
        </Route>
        <Route path="/profile/:id">
          <Profile profileDetails={profileDetails}/>
        </Route>
        <Route  path="/listings/new">
          <NewItemForm sendNewItemUp={addNewItem}/>
        </Route>
        <Route exact path="/listings">
          <ItemList/>
        </Route>
        <Route exact path="/listings/:id">
          <ItemDetail />
        </Route>
      </Switch>
    </div>
);
}

export default App;
