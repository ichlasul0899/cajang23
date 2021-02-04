import React from 'react'
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import KelasSaya from '../../Components/KelasSaya'
import ListKelas from '../../Components/ListKelas'
import Profile from '../../Components/Profile'
import KelasTraining from '../../Components/KelasTraining'
import './Dasbor.css';
import Header from '../../Components/Header'
import Sidebar from '../../Components/Sidebar';
import Footer from '../../Components/Footer'
import Menu from '../../Components/Menu'

const DasbordHome = () => {
  return (
    <div style={{border: '1px solid black', margin: '20px'}}>
      <h3>Judul Nya </h3>
      <p>Dasbord</p>
    </div>
  )
}
const Dasbor = () => {
  let match = useRouteMatch();

  const menu = [
    {
      title: "Dasbor",
      path: "/dasbor",
    },
    {
      title: "Kelas training",
      subMenu: [
        {
          title: "Kelas yang Diikuti",
          path: "/dasbor/kelas-saya",
        },
        {
          title: "Register Kelas Baru",
          path: "/dasbor/list-kelas",
        },
      ],
    },
    {
      title: "Update Profil",
      path: "/dasbor/profil-saya",
    },
  ];

  return (
    <div
      style={{
        border: "3px solid black",
        height: "100%",
      }}
    >
      {/* <div className='mySidebar'>
        <ul>
          <li>
            <Link to={`${match.url}/list-kelas`}>Daftar Kelas Baru</Link>
          </li>
          <li>
            <Link to={`${match.url}/kelas-saya`}>Kelas Saya</Link>
          </li>
          <li>
            <Link to={`${match.url}/profil-saya`}>Edit Profile</Link>
          </li>
          <li>
            <Link to={`${match.url}/kelas-training/1`}>Kelas Training</Link>
          </li>
        </ul>
      </div> */}
      <Header />

      <div style={{ display: "flex", border: '1px solid red', margin: '0 10%' }}>
        <div className="mySideBar">
          {/* <Sidebar /> */}
          <div style={{border: '1px solid black', backgroundColor: 'yellow', padding: '20px', width: '300px', height: '400px'}}>
            <h3>Ichlas</h3>
            <div>
              {menu.map((item, index) => {
                return <Menu data={item} key={index} />
              })}
            </div>
          </div>
        </div>

        <div classNama="myContent">
          <Switch>
            <Route path={`${match.path}/profil-saya`}>
              <Profile />
            </Route>
            <Route path={`${match.path}/list-kelas`}>
              <ListKelas />
            </Route>
            <Route path={`${match.path}/kelas-saya`}>
              <KelasSaya />
            </Route>
            <Route path={`${match.path}/kelas-training/:id`}>
              <KelasTraining />
            </Route>
            <Route path={match.path}>
              <DasbordHome />
            </Route>
          </Switch>
        </div>
      </div>
    
      <Footer />
    </div>
  );
}


export default Dasbor
