import React, { useState, useEffect } from 'react'
import {Link } from 'react-router-dom'

const KelasCard = ({ data }) => {
  const { id, namaKelas, tanggalMulai, tanggalSelesai, status } = data
  
  return (
    <tr>
      <td>{id}</td>
      <td>{namaKelas}</td>
      <td>{tanggalMulai}</td>
      <td>{tanggalSelesai}</td>
      <td>{status}</td>
      <td>
        <Link to={`/dasbor/kelas-training/${id}`}>Go To Kelas</Link>
      </td>
    </tr>
  );
}

const KelasSaya = () => {
  const [semuaKelas, setSemuaKelas] = useState([]);

  useEffect(() => {
    setSemuaKelas([
      {
        id: "1",
        namaKelas: "React JS - Web Frontend Development",
        descipsi:
          "React Js merupakan salah satu framework frontend populer.             Digunakan oleh banyak perusahaan besar dan didukung komunitas yang besar serta kemudahan penggunaannya, menjadi daya tarik utama kenapa memilih React JS untuk membuat website lebih user friendly",
        tanggalMulai: "11 Januari 2021",
        tanggalSelesai: "15 February 2021",
        status: "Pembayaran Diterima",
      },
      {
        id: "2",
        namaKelas: "React JS Lanjutan - Web Frontend Development",
        descipsi:
          "React Js merupakan salah satu framework frontend populer.             Digunakan oleh banyak perusahaan besar dan didukung komunitas yang besar serta kemudahan penggunaannya, menjadi daya tarik utama kenapa memilih React JS untuk membuat website lebih user friendly",
        tanggalMulai: "15 February 2021",
        tanggalSelesai: "11 Maret 2021",
        status: "Pembayaran Diterima",
      },
    ]);
  }, [])

  return (
    <div style={{padding: '20px', border: '1px solid orange'}}>
      {/* <h3>
        Kelas saya: React js, data disini fetch ke api aja/ atau pas di dasboard
        langsung fetch seluruh data masukin ke state mangemnet supaya lancar
        jaya.
      </h3> */}

      <table border="1">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Kelas</th>
            {/* <th>Deskripsi</th> */}
            <th>Tanggal Mulai</th>
            <th>Tanggal Selesai</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {semuaKelas.map((kelas) => {
            return <KelasCard data={kelas}/>
          })}
          
        </tbody>
      </table>
    </div>
  );
}

export default KelasSaya
