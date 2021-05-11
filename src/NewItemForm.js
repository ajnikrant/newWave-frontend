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
        // .then(r => r.json())
        // .then(console.log)


        sendNewItemUp(newItem)
    }


    return (
        <div >
        <h2>Submit An Item to Sell or Trade</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={formData.title} name="title" placeholder="Item Name" />
          <br></br>
          <br></br>
          <input type="textarea" onChange={handleChange} value={formData.description} name="description" placeholder="Description" />
          <br></br>
          <br></br>
          <input type="text" onChange={handleChange} value={formData.location} name="location" placeholder="Where are you Located?" />
          <br></br>
          <br></br>
          <input type="number" onChange={handleChange} value={formData.price} name="price" step="0.01" placeholder="Price" />
          <br></br>
          <br></br> 
          {/* <label > Item Image: */}
            {/* <input type="file" onChange={handleChange} value={formData.image} name="image" label="Item Image" /> */}
            <input type="text" onChange={handleChange} value={formData.image} name="image" placeholder="Image URL" />
          {/* </label> */}
          <br></br>
          <br></br>          
 
          <label> Select Item Category:
            <select onChange={handleCategoryChange}>
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
          <label> Sell or Barter? 
          <select onChange={handleSaleTypeChange}>
            <option value="barter">Barter</option>
            <option value="for_sale">Sell</option>
            <option value="both">Both</option>
          </select>
         </label>
          <br></br>
          <br></br>
        <label> If You Chose Barter, What Are You Looking To Trade For?
        <input onChange={handleChange} type="text" value={formData.barter_description} name="barter_description" placeholder="Guitars, Drums, etc" />

         </label>
         <br></br>
          <br></br>

          <button  type="submit">Create Listing</button>
        </form >
      </div>
    )
}

export default NewItemForm