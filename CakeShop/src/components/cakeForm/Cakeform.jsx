import React, { useState } from "react";
import "./Cakeform.css"
function Cakeform(props) {
  const {addCake}=props
//   const [headingText, setHeadingText] = useState("Add Products");
  // const [isMousedOver, setMouseOver] = useState(false);
  const [name,setName]=useState('')
  const [image,setImage]=useState('')
  const [units,setUnits]=useState('')
  const [price,setPrice]=useState('')

  const handleNameChange=(e)=>{
    setName(e.target.value)
  }
  const handleImageChange=(e)=>{
    setImage(e.target.value)
  }
  const handleUnitsChange=(e)=>{
    setUnits(e.target.value)
  }
  const handlePriceChange=(e)=>{
    setPrice(e.target.value)
  }

  const handleFormSubmit=(e)=>{
    e.preventDefault()
    
    if(!image || !name || !units || !price){
        toast.error("Please fill the details ")
        return; 
    }
    const data={
        image,
        name,
        units,
        price
    }
    addCake(data)
    setName('')
    setImage('')
    setUnits('')
    setPrice('')
    
}
  return (
    <div className="container">
      <h2>Add Cake</h2>
      <form>
        <input type="text" placeholder="Cake Name" onChange={handleNameChange}  />
        <input type="text" placeholder="Weight in units" onChange={handleUnitsChange}  />
        <input type="text" placeholder="Price" onChange={handlePriceChange} />
        <input type="text" placeholder="Image" onChange={handleImageChange} />
        <button
          onClick={handleFormSubmit}
        >
          Add Cake
        </button>
      </form>
    </div>
  );
}

export default Cakeform;