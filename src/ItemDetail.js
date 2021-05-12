import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'

function ItemDetail({ removeDeleted }){
    const location = useLocation()
    const listingDetail = location.state.params
    const [toUpdate, setToUpdate] = useState(false)
    
    function handleDlt() {
        fetch(`http://localhost:3000/listings/${listingDetail.id}`, {
            method: 'DELETE'
        })
        removeDeleted(listingDetail.id)
    }
    function handleUpdate() {
        setToUpdate(toUpdate => !toUpdate)
    }
  
    return (
       <div>
           <br></br>
            <h1>{listingDetail.title}</h1>
            <img src={listingDetail.image} alt={listingDetail.title}/>
            <p>{listingDetail.description}</p>
            <p><strong>Price: </strong>${listingDetail.price}</p>
            <p><strong>Willing to trade for: </strong>{listingDetail.barter_description}</p>
            <p><strong>Located: </strong>{listingDetail.location}</p>
            <button>Message seller</button>
            <button onClick={handleUpdate}>Update Listing</button>
            <button onClick={handleDlt}>Delete Listing</button>
            {toUpdate ? <div>
                <br></br><br></br>
                {/* <form>
                    <label>Title</label>
                    <input type="text" placeholder={listingDetail.title}></input><br></br><br></br>
                    <label>Image</label>
                    <input type="text"></input><br></br><br></br>
                    <label>Description</label>
                    <input type="text"></input><br></br><br></br>
                    <label>Price</label>
                    <input type="number"></input><br></br><br></br>
                    <label>Willing to trade for: </label>
                    <input type="text"></input><br></br><br></br>
                    <label>Location</label>
                    <input type="text"></input><br></br><br></br>
                    <input type="submit"></input>
                </form> */}
                 <h2>Update Your Listing</h2>
        <form>
            <div className="form-floating mb-3">
                <input type="text" name="title" className="form-control" id="floatingInput" placeholder="Item Name"/>
                <label for="floatingInput">Item Name</label>
            </div>
          <div className="form-floating mb-3">
                <textarea className="form-control" name="description" placeholder="Description..." id="floatingTextarea2" ></textarea>
                <label for="floatingInput">Description</label>
            </div>
          <div className="form-floating mb-3">
                <input type="text" name="location" className="form-control" id="floatingInput" placeholder="Where are you Located?"/>
                <label for="floatingInput">Location</label>
            </div>
          <div className="form-floating mb-3">
                <input type="number" name="price" className="form-control" id="floatingInput" placeholder="Price"/>
                <label for="floatingInput">Price</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" name="image" className="form-control" id="floatingInput" placeholder="Image"/>
                <label for="floatingInput">Image</label>
            </div>
            {/* <div className="mb-3">
                <label for="formFile" className="form-label">Image</label>
                <input onChange={handleChange} value={formData.image} name="image" className="form-control" type="file" id="formFile"/>
            </div> */}
          <label> Select Item Category:
            <select className="form-select" id="floatingSelect" aria-label="Floating label select example" >
                <option value="strings">Strings</option>
                <option value="percussion">Percussion</option>
                <option value="woodwind">Woodwind</option>
                <option value="brass">Brass</option>
                <option value="piano">Keyboard/Piano</option>
                <option value="misc">Other</option>
             </select> 
         </label>
            <br></br>
            <br></br>
          <label> Sell or Trade? 
          <select className="form-select" id="floatingSelect" aria-label="Floating label select example" >
            <option value="barter">Trade</option>
            <option value="for_sale">Sell</option>
            <option value="both">Both</option>
          </select>
         </label>
          <br></br>
          <br></br>
        <label> If You Chose Barter, What Are You Looking To Trade For?
        <div className="form-floating mb-3">
                <input type="text" name="barter_description" className="form-control" id="floatingInput" placeholder="Where are you Located?"/>
                <label for="floatingInput">Guitars, Drums, etc</label>
            </div>
         </label>
         <br></br>
          <br></br>
          <button  className="btn btn-primary" type="submit">Create Listing</button>
        </form >
      </div> : null}
       </div>

        

    )
}

export default ItemDetail