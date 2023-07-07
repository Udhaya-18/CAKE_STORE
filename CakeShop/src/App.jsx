import Panel from "./components/panel/Panel";
import Cake from "./components/cake/Cake";
import "./App.css"
import { useState } from "react";
import Cakeform from "./components/cakeForm/Cakeform";

export default function App() {
  const cakes = [{
    image: "https://cdn.shopify.com/s/files/1/0034/8343/5072/products/Web_ChocolateTruffle.jpg?v=1681449307",
    name: "Choco truffle",
    units: "1/2 kg",
    price: "₹300" 
  },
  {
    image: "https://theobroma.in/cdn/shop/products/EgglessRedVelvetCake1.jpg?v=1632141306",
    name: "Red Velvet",
    units: "1/2 kg",
    price: "₹300" 
  },
  {
    image: "https://bakewithshivesh.com/wp-content/uploads/2021/11/IMG_3947-scaled.jpg",
    name: "White forest",
    units: "1 kg",
    price: "₹500" 
  },{
    image: "https://cdn.shopify.com/s/files/1/0516/2831/0688/products/0I4A5479copy_1200x1200.jpg?v=1641168101",
    name: "Black forest",
    units: "1 kg",
    price: "₹500" 
  },
  {
    image: "https://cdn.igp.com/f_auto,q_auto,t_prodl/products/p-special-butterscotch-cake-half-kg--109218-m.jpg",
    name: "Butterscotch",
    units: "1/2 kg",
    price: "₹300" 
  }
]
  const [addcake,setAddcake]=useState(false)
  const addcakeForm=()=>{
    setAddcake(true)
  }
  const closecakeForm=()=>{
    setAddcake(false)
  }
  return (
    <div className="App">
      <Panel addcakeForm={addcakeForm} closecakeForm={closecakeForm}/>
      {
        addcake ? 
        <Cakeform/>
      : 
      <div className="cakePanel">
      {
        cakes.map((item)=> <Cake list={item}/>)
      }
      </div>
      }

    </div>
  );
}

