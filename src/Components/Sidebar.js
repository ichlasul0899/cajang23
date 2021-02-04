import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa'

const Sidebar = () => {
  const [display, setDisplay] = useState(true)
  const handleSidebar = () => {
    setDisplay(!display)
  }
  return (
    <div
      style={{
        position: "fixed",
        left: `${display ? "-300px" : '0'}`,
        top: "0",
        width: "250px",
        height: "100%",
        background: "#042331",
        color: "white",
      }}
    >
      <div
        className="judul"
        style={{ display: "flex", border: "1px solid white", justifyContent: 'center', alignItems: 'center' }}
      >
        <FaBars style={{ border: "1px solid red",  }} onClick={handleSidebar} />
        <h3 style={{ border: "1px solid red", margin: '0 10px' }}>Cajang Tech Edu</h3>
      </div>
    </div>
  );
}

export default Sidebar
