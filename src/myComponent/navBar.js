import { React, useState, useEffect } from "react";
let bool = false;
export function NavBar(props) {
  const [state, setstate] = useState(bool);
  let name = props.name;
  let name1 = props.name1;
  useEffect(() => {
    setInterval(() => {
      setstate((v) => (v === true ? false : true));
    }, 2000);
  }, []);
  // {state ? <h3>{name}</h3> : <h3>{name1}</h3>}
  return (
    
     <>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Login</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/home">PlayerList</a>
        </li>
      </ul>
      <span className="navbar-text">
      </span>
    </div>
  </div>
</nav>
          
</>

      
      );
  }