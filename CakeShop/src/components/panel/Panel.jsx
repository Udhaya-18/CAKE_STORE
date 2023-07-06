import "./Panel.css"

const Panel = () => {
  return (
    <div className="panel">
      <div className="panelLeft">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2965/2965655.png"
          alt="cake"
          height="50"
          width="50"
        />
        <h1>Cake</h1>
      </div>
      <div className="panelRight">
        <a href="">Add cake</a>
        <a href="">Cakes</a>
      </div>
    </div>
  );
};

export default Panel;
