import React, {useState} from 'react';

function NewItemForm({sendNewItemUp}){
    const [formData, setFormData] = useState({
        title:"",
        description:"",
        price:"",
        image:"",
        category:"strings",
        barter: true,
        for_sale: false,
        barter_description:"",
        location: "",
    })

    function handleChange(e){
        setFormData({...formData, 
            [e.target.name] : e.target.value
        })
    }

    function handleCategoryChange(e){
        setFormData({...formData, 
            ["category"] : e.target.value
        })
    }


    function handleSaleTypeChange(e){
        if (e.target.value == "for_sale"){
            setFormData({...formData, 
                ["for_sale"] : true,
                ["barter"] : false
            })}
        else if (e.target.value == "barter"){
            setFormData({...formData, 
                ["barter"] : true, 
                ["for_sale"] : false,
            })}
        else if (e.target.value == "both"){
            setFormData({...formData, 
                ["for_sale"] : true,
                ["barter"] : true
            })}
    }

    function handleSubmit(e){
        e.preventDefault()

        const newItem = {
            title: formData.title,
            description: formData.description,
            price: Number(formData.price),
            image: formData.image,
            category: formData.category,
            barter: formData.barter,
            for_sale: formData.for_sale,
            barter_description: formData.barter_description,
            location: formData.location,
            user_id:  2
        }

        fetch('http://localhost:3000/listings', {
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(newItem)
        })
        .then(r => r.json())
        .then(sendNewItemUp)
    }


    return (
        <div id="newform">
        <h2>Submit An Item to Sell or Trade</h2>
        <form id="innerNewForm" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
                <input type="text" onChange={handleChange} value={formData.title} name="title" className="form-control" id="floatingInput" placeholder="Item Name"/>
                <label for="floatingInput">Item Name</label>
            </div>
          <div className="form-floating mb-3">
                <textarea className="form-control" onChange={handleChange} value={formData.description} name="description" placeholder="Description..." id="floatingTextarea2" ></textarea>
                <label for="floatingInput">Description</label>
            </div>
          <div className="form-floating mb-3">
                <input type="text" onChange={handleChange} value={formData.location} name="location" className="form-control" id="floatingInput" placeholder="Where are you Located?"/>
                <label for="floatingInput">Location</label>
            </div>
          <div className="form-floating mb-3">
                <input type="number" onChange={handleChange} value={formData.price} name="price" className="form-control" id="floatingInput" placeholder="Price"/>
                <label for="floatingInput">Price</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" onChange={handleChange} value={formData.image} name="image" className="form-control" id="floatingInput" placeholder="Image"/>
                <label for="floatingInput">Image</label>
            </div>
            {/* <div className="mb-3">
                <label for="formFile" className="form-label">Image</label>
                <input onChange={handleChange} value={formData.image} name="image" className="form-control" type="file" id="formFile"/>
            </div> */}
          <label> Select Item Category:
            <select className="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={handleCategoryChange}>
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
          <select className="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={handleSaleTypeChange}>
            <option value="barter">Trade</option>
            <option value="for_sale">Sell</option>
            <option value="both">Both</option>
          </select>
         </label>
          <br></br>
          <br></br>
        <label> If You Chose Barter, What Are You Looking To Trade For?
        <div className="form-floating mb-3">
                <input type="text" onChange={handleChange} value={formData.barter_description} name="barter_description" className="form-control" id="floatingInput" placeholder="Where are you Located?"/>
                <label for="floatingInput">Guitars, Drums, etc</label>
            </div>
         </label>
         <br></br>
          <br></br>
          <button  className="btn btn-primary" type="submit">Create Listing</button>
        </form >
      </div>
    )
}

export default NewItemForm
