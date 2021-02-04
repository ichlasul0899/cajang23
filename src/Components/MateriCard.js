import React from 'react'

const MateriCard = ({ data }) => {
  const {judul, descripsi} = data
  return (
    <div style={{ padding: "20px", border: "1px solid orange" }}>
      <h4 style={{ fontWeight: "bold" }}>{judul}</h4>
      <p>{descripsi}</p>
    </div>
  );
}

export default MateriCard
