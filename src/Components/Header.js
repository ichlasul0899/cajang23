import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/image/CTELOGO.png'
import '../App.css'

const Header = () => {

  const logout = () => {
    alert('Anda berhasil Logout, tapi bohong!')
  }
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignContent: "center",
        padding: '10px 0'
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img width="80px" height="80px" src={Logo} alt="" />
        <p
          style={{
            fontSize: "22px",
            marginLeft: "10px",
            fontWeight: "bold",
            height: "fit-content",
            fontFamily: "helvetica",
            textShadow: '2px 2px #eaeaea'
          }}
        >
          CAJANG TECH EDU
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ul>
          <li>
            <Link to="/dasbor">Dasbor</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user">Users</Link>
          </li>
        </ul>
        <button
          style={{
            fontSize: "16px",
            backgroundColor: "red",
            color: "white",
            margin: "0 0 0 20px",
            padding: "10px 25px",
            borderRadius: "5px",
            fontWeight: "bold",
            border: "1px solid red",
            cursor: 'pointer'
          }}
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header
