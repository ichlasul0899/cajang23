import React, {useState, createContext} from 'react'

export const BuahContext = createContext();
export const BuahProvider = (props) => {
  const [buah, setBuah] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState(0);
  const [change, setChange] = useState(false);
  const [id, setId] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <BuahContext.Provider
      value={
        ([{
          buah, setBuah,
          price, setPrice,
          weight, setWeight,
          name, setName,
          change, setChange,
          id, setId,
          edit, setEdit
        }])
      }
    >
      {props.children}
    </BuahContext.Provider>
  );
}