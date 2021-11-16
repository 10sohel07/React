import {React, useState} from "react";
export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [descrip, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if(!title || !descrip) {
      alert("Title and Description Cannot be Empty");
    } else {
      props.addTodo(title, descrip);
    }
  }
  return (
    <>
     <div className="container my-3">
       <h1 id="foxer"> <marquee width="60%" direction="left" height="100px">FC SOHEL </marquee></h1>
     


      <div className="container my-3">
      <h2  id="rout" className="mb-3 text-center"> <marquee width="60%" direction="right" height="100px"> Allez Sohel!! </marquee> </h2>
      <form onSubmit={submit}>
      <div className="mb-3" id="name">
        <label for="exampleFormControlInput1" className="form-label">
          PLAYER NAME
        </label>
        <input
          type="title"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter the Player Name"
          value={title}
          onChange={(text) => setTitle(text.target.value)}
        />
      </div>
      <div className="mb-3" id="name">
        <label for="exampleFormControlInput1" className="form-label">
          PLAYER POSITION
        </label>
        <input
          type="title"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter the Position"
          value={descrip}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <button className="btn btn-success">
        Add To My Team
      </button>
      </form>
      </div>
      </div>
    </>
  );
};