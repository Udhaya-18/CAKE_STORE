import "./Cake.css";

const cake = (props) => {
    const {list}=props 
  const {image,name,units,price}=list
  return (
    <div className="cakeContainer">
        <img className="cakeimg" src={image} alt="cake" height="250px" width="250px" />
        <h1> {name}</h1>
        <p>{units}</p>
        <p>{price}</p>
    </div>
  )
  
};
export default cake;