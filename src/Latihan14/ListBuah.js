import React, { useEffect, useContext } from "react";
import axios from "axios"
import { BuahContext } from "./BuahContext";

const BuahList = () => {
  const [
    {
      buah,
      setBuah,
      change,
      setChange,
      setName,
      setPrice,
      setWeight,
      setEdit,
      setId,
    },
  ] = useContext(BuahContext);

  useEffect(() => {
    axios
      .get('http://backendexample.sanbercloud.com/api/fruits')
      .then((e) => {
        console.log("Data 13", e.data)
        setBuah(e.data)
      })
      .catch((err) => console.log(err))
      .finally(() => setChange(false))
  }, [setBuah, change]);

  useEffect(() => {
    console.log('Change 2')
  }, [buah])

  const handleDelete = (event) => {
    axios
      .delete(`http://backendexample.sanbercloud.com/api/fruits/${event}`)
      .then((res) => {
        setChange(true);
      })
      .catch((err) => console.log(err));
  }

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
            <th>Aksi</th>
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
                <td>
                  <button
                    onClick={(e) => {
                      setId(val.id);
                      setEdit(true);
                      buah.filter((e) => {
                        if (e.id === val.id) {
                          setName(e.name);
                          setPrice(e.price);
                          setWeight(e.weight);
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
                </td>
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
