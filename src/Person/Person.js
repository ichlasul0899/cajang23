import React, {useState} from 'react'
import "./Person.css";

const UserInput = (props) => {
  return (
    <form>
      <label>Name:</label>
      <input style={{padding: '8px', margin:'0 5px'}} type="text" name={props.name} onChange={props.changed} />
      <button style={{border: "1px solid red", color: 'red'}} onClick={() => props.setEdit(false)}>Close</button>
    </form>
  );
}

const UserOutput = (props) => {
  return <h3>{props.name}</h3>;
}

const Person = () => {
  const style = {
    backgroundColor: 'red',
    marginRight: '8px',
  };

  const [name, setName] = useState("")
  const [edit, setEdit] = useState(false)

  const changed = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="Person">
      <h3>Hai Ichlasul Amal</h3>
      <button onClick={()=> setEdit(true)} style={{ backgroundColor: "green" }}>Edit</button>
      <button onClick={() => setName("")} style={style}>Delete</button>
      {edit && <UserInput setEdit={setEdit} changed={changed} name={name} /> }
      <UserOutput name={name} />
    </div>
  );
}

export default Person
