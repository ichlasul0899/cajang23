import React, { useEffect, useContext } from "react";
import axios from "axios"
import { BuahContext } from "./BuahContext";

const BuahList = () => {
  const [buah, setBuah] = useContext(BuahContext);

  useEffect(() => {
    axios
      .get('http://backendexample.sanbercloud.com/api/fruits')
      .then((e) => {
        console.log("Data 13", e.data)
        setBuah(e.data)
      })
      .catch((err) => console.log(err))
      .finally(() => console.log("Hai 16"))
  }, [setBuah]);

  useEffect(() => {
    console.log('Change 2')
  }, [buah])

  return (
    <>
      <h3>Daftar Harga Buah</h3>
      <table className="listBuah" border='1'>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
            {/* <th>Aksi</th> */}
          </tr>
        </thead>
        <tbody>
          {buah && buah.map((val, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{val.name}</td>
                <td>{val.price}</td>
                <td>{val.weight / 1000} kg</td>
                {/* <td>
                  <button
                    onClick={() => {
                      setId(val.id);
                      setEdit(true);
                      buah.filter((e) => {
                        if (e.id === val.id) {
                          setInputName(e.name);
                          setInputHarga(e.price);
                          setInputBerat(e.weight);
                        }
                      });
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(val.id);
                    }}
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <ul>
        {buah && buah.map((el) => {
          return (
            <li>
              name: {el.name}
            </li>
          );
        })}
      </ul> */}
    </>
  );
};

export default BuahList;
