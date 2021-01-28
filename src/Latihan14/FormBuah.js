import React, { useContext, useEffect } from "react";
import { BuahContext } from "./BuahContext";
import axios from "axios";

const FormBuah = () => {
  
  // const [buah, setBuah] = useContext(BuahContext);
  const [name, setName] = useContext(BuahContext);
  const [price, setPrice] = useContext(BuahContext);
  const [weight, setWeight] = useContext(BuahContext);


  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://backendexample.sanbercloud.com/api/fruits", {
        name,
        price: '2222',
        weight: 0
      })
      .then((res) => {
        console.log(res)
        console.log("Success")
      });

    //Kosongin Form
    setName("")
  };

  useEffect(() => {
    console.log(name)
  }, [name])

  return (
    <>
      <h3>Form Daftar Harga Buah</h3>
      <form className="formBuah">
        <table>
          <tr>
            <td>
              <label>Nama :</label>
            </td>
            <td>
              <input
                type="text"
                name="inputName"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Harga :</label>
            </td>
            <td>
              <input
                type="text"
                name="inputHarga"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Berat :</label>
            </td>
            <td>
              <input
                type="text"
                name="inputBerat"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </td>
          </tr>
        </table>
        <button
          type="button"
          className="submitBuah"
          onClick={handleSubmit}
        >
          submit
        </button>
      </form>
    </>
  );
};

export default FormBuah;
