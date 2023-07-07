import "./Cake.css";

const cake = (props) => {
    const {list}=props 
  const {image,name,units,price}=list
  return (
    <div className="cakeContainer">
        <img className="cakeimg" src={image} alt="cake" height="250px" width="250px" />
        <h1> {name}</h1>
        <p>{price}</p>
        <p>{units}</p>
        <div>
          <img id="edit" src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="edit" height="30" width="30"/>
          <img id="delete" src="https://cdn-icons-png.flaticon.com/512/1827/1827951.png" alt="edit" height="30" width="30"/>
        </div>
    </div>
  )
  
};
export default cake;