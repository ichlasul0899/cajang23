import React, {useState, createContext} from 'react'

export const BuahContext = createContext();


export const BuahProvider = (props) => {
  const [buah, setBuah] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState(0);



  return (
    <BuahContext.Provider value={([buah, setBuah], [price, setPrice], [weight, setWeight], [name, setName])}>
      {props.children}
    </BuahContext.Provider>
  );
}