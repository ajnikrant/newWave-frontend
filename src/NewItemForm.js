import React from 'react';

function NewItemForm(){
    return (
        <div >
        <h2>Submit An Item to Sell or Trade</h2>
        <form>
          <input value="" type="text" name="title" placeholder="Item Name" />
          <br></br>
          <br></br>
          <input value="" type="textarea" name="description" placeholder="Description" />
          <br></br>
          <br></br>

          <input value="" type="number" name="price" step="0.01" placeholder="Price" />
          <br></br>
          <br></br>          
          <label> Select Item Category:
            <select>
                <option value="Classical">Classi</option>
                <option value="World">World</option>
                <option selected value="Pop">Pop</option>
                <option value="Folk">Folk</option>
                <option value="Jazz">Jazz</option>
                <option value="Electronic">Electronic</option>
             </select> 
         </label>
         <br></br>
          <br></br>
          <label> Sell or Barter? 
          <select>
            <option value="barter">Barter</option>
            <option value="for_sale">Sell</option>
            <option value="">Both</option>
          </select>
         </label>
          <br></br>
          <br></br>
        <label> What Are You Looking To Trade For?
            <select>
                <option value="Classical">Classi</option>
                <option value="World">World</option>
                <option selected value="Pop">Pop</option>
                <option value="Folk">Folk</option>
                <option value="Jazz">Jazz</option>
                <option value="Electronic">Electronic</option>
             </select> 
         </label>
         <br></br>
          <br></br>

          <button type="submit">Create Listing</button>
        </form>
      </div>
    )
}

export default NewItemForm