import React from 'react'
import CTE from '../assets/image/CTELOGO.png'

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "20px",
        color: "white",
        padding: "20px 10%",
      }}
    >
      <div>
        <div style={{ width: "50%" }}>
          <div style={{ display: "flex", alignContent: 'center',  }}>
            <img width="80px" height="80px" src={CTE} alt="" />
            <div style={{ marginLeft: "20px" , textAlign: 'left'}}>
              <h3 style={{margin: '0'}}>CTE</h3>
              <p>
                Cajang Tech Edu (CTE) adalah Program pembelajaran untuk pemula
                yang ingin menjadi seorang Full Stack Developer.
              </p>
            </div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "100px" }}>
            <p>
              <b>Tentang Kami</b>
            </p>
            <p>Portfolios</p>
            <p>Blogs</p>
            <p>Careers</p>
          </div>
          <div>
            <p>
              <b>Contact</b>
            </p>
            <p>ichlasul0899@gmail.com</p>
            <p>+62 82362097321</p>
            <p>Jl Sukabirus No.9 Dayeuhkolot. Kab Bandung. 12345</p>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <p style={{ marginRight: "20px" }}>@2021 PT.Cajang Tech Education</p>
          <div style={{ display: "flex" }}>
            <p style={{ marginRight: "20px" }}>
              <b>Syarat Dan Ketentuan</b>
            </p>
            <p>
              <b>Kebijakan Privasi</b>
            </p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <p style={{ marginRight: "20px" }}>Instagram </p>
          <p>Youtube </p>
        </div>
      </div>
    </div>
  );
}

export default Footer
