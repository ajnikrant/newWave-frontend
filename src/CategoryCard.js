import React from 'react';

function CategoryCard({ name, selectedCat, setSelectedCat, catClicked, setCatClicked}){
 
    function handleCategoryClick(e) {
        setSelectedCat(e.target.alt)
        setCatClicked(true)
    }
    
    let categoryImg 
        if(name ==="woodwinds"){
            categoryImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOXgKDZbch_5U4m3MfssOAAOkRkI0B_LrZzA&usqp=CAU"
        }
        else if (name ==="strings"){
            categoryImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxdFIqkFFVrMdHNtLJNW1dMUafE6b5PGk_dg&usqp=CAU"
        }
        else if (name ==="percussion"){
            categoryImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKSvDk8VWvyXz472DuwmL-3455lxCkLUxB7w&usqp=CAU"
        }
        else if (name ==="piano/keyboard"){
            categoryImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1o5bvFmg7k2fIw0gMx6QQC7yCQuD7KGD2w&usqp=CAU"
        }
        else if (name ==="brass"){
            categoryImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeyjxLgWFOl-ONGi_mWTXyMLwknID-eYq1DA&usqp=CAU"
        }
        else if (name === "All"){
            categoryImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdbUuiirNejtVZZdyoid0962sQSjNVX0aFzg&usqp=CAU"
        }

    
    return (
        <>
        {!catClicked &&
        <div className="item" onClick={handleCategoryClick} >
                <h2>{name}</h2>
                <img id="catImage" src={categoryImg} alt={name} />
        </div> }
        </>
    )
}


 


export default CategoryCard