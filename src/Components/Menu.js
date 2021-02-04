import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const SubMenu = ({ data }) => {
  const {title, path} = data
  return (
    <div
      style={{
        border: "1px solid black",
        backgroundColor: "#eaea",
        padding: "10px 20px",
        colour: 'white'
      }}
    >
      <Link to={path}>{title}</Link>
    </div>
  );
}

const MenuWithSubMenu = ({ data }) => {
  const { title, subMenu } = data
  const [display, setDisplay] = useState(false)

  const handleClick = () => {
    setDisplay(!display)
  }
  return (
    <div>
      <div
        onClick={handleClick}
        style={{
          backgroundColor: "white",
          padding: "10px 20px",
          border: "1px solid black",
          cursor: 'pointer',
        }}
      >
        <p style={{ margin: "0" }}>{title}</p>
      </div>
      <div
        style={{
          display: `${display ? "flex" : "none"}`,
          flexDirection: "column",
        }}
      >
        {subMenu.map((item, index) => {
          return <SubMenu data={item} />;
        })}
      </div>
    </div>
  );
}

const Menu = ({ data }) => {
  const { title, path, subMenu } = data
  console.log(subMenu)
  return (
    <div>
      {subMenu ? (
        <MenuWithSubMenu data={data} />
      ) : (
        <div style={{border: '1px solid black', backgroundColor: 'white', padding: '10px 20px'}}>
          <Link to={path}>{title}</Link>
        </div>
      )}
    </div>
  );
}

export default Menu
