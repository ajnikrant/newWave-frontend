import React, {useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom'
import Banner from './Banner'
import NavBar from './NavBar'
import HomePage from './HomePage'
import Profile from './Profile'
import NewItemForm from './NewItemForm';
import ItemList from './ItemList'
import ItemCard from './ItemCard'

function App() {
  const[profileDetails, setProfileDetails] = useState({})
  const [listingsArr, setListingsArr] = useState([])
  const [selectedCat, setSelectedCat] = useState("all")

  useEffect(()=>{
      fetch ('http://localhost:3000/listings')
      .then(r=> r.json())
      .then(setListingsArr)
      }, [])

  const filteredByCat = listingsArr.filter(listing => {
      if (selectedCat === "all") {
          return listing
      } else if (listing.category === selectedCat) {
          return listing
      }
  })

  useEffect(()=>{
    fetch('http://localhost:3000/users/172')
    .then(r => r.json())
    .then(setProfileDetails)
  },[])


  return (
    <div>
      <Banner />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage filteredByCat={filteredByCat} selectedCat={selectedCat} setSelectedCat={setSelectedCat} listingsArr={listingsArr}/>
        </Route>
        <Route path="/profile/:id">
          <Profile profileDetails={profileDetails}/>
        </Route>
        <Route  path="/listings/new">
          <NewItemForm />
        </Route>
        <Route  path="/listings">
          <ItemList/>
        </Route>
        <Route  path="/listings/:id">
          <ItemCard/>
        </Route>
      </Switch>
    </div>
);
}

export default App;
