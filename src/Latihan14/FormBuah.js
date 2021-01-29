import React, { useContext, useEffect } from "react";
import { BuahContext } from "./BuahContext";
import axios from "axios";

const FormBuah = () => {
  
  // const [buah, setBuah] = useContext(BuahContext);
  const [{ setChange, name, setName, price, setPrice, weight, setWeight, edit, setEdit, id, setId }] = useContext(
    BuahContext
  );


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      price,
      weight,
    };
    if (edit) {
      axios
        .put(`http://backendexample.sanbercloud.com/api/fruits/${id}`, data)
        .then((res) => {
          setChange(true);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          console.log('Berhasil Edit')
        });
    } else {
      axios
        .post("http://backendexample.sanbercloud.com/api/fruits", data)
        .then((res) => {
          console.log(res)
          console.log("Success")
          setChange(true)
        })
        .catch((err) => console.log("Error", err))
        .finally(()=>console.log("Fect API success"));
    }

    //Kosongin Form
    setEdit(false)
    setId(false)
    setName("")
    setPrice("")
    setWeight("")
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
