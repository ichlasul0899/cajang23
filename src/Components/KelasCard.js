import React from 'react'

const KelasCard = ({ data }) => {
  const {judul, descripsi, price, score, autho} = data
  return (
    <div
      style={{
        width: "20%",
        borderRadius: "20px",
        margin: "0 10px",
        padding: "10px 5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: 'yellow',
      }}
    >
      <div>
        <div style={{ borderBottom: "1px solid black" }}>
          <h3>{judul}</h3>
        </div>

        {/* <p>{descripsi}</p> */}
        <p>{price}</p>
        {/* <p>{score}</p> */}
        {/* <p>{autho}</p> */}
      </div>
      <button style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '20px',
      }}>Daftar kelas</button>
    </div>
  );
}

export default KelasCard
