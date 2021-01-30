import React from 'react'

const MateriCard = ({ data }) => {
  const {judul, descripsi} = data
  return (
    <div>
      <h4 style={{fontWeight: 'bold'}}>{judul}</h4>
      <p>{descripsi}</p>
    </div>
  )
}

export default MateriCard
