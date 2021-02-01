import React from 'react'

const ScoreCard = ({ data }) => {
  
  const {rate, title} = data
  return (
    <div
      style={{padding: "20px", margin: "0 20px", borderRadius: '20px', textAlign: 'center', width: '30%' , backgroundColor: 'white'}}
    >
      <p>{title}</p>
      <h3>
        <b>{rate}</b>
      </h3>
    </div>
  );
}

export default ScoreCard
