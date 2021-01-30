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

const Dasbor = () => {
  let match = useRouteMatch();

  return (
    <div>
      <p>Ini Dasbor</p>

      {/* sidebar */}
      <div>
        <ul>
          <li>
            <Link to={`${match.url}/list-kelas`}>
              Daftar Kelas Baru
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/kelas-saya`}>Kelas Saya</Link>
          </li>
          <li>
            <Link to={`${match.url}/profil-saya`}>Edit Profile</Link>
          </li>
        </ul>
      </div>

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
        <Route path={match.path}>
          <h3>Home Dasboard</h3>
        </Route>
      </Switch>
    </div>
  );
}



export default Dasbor
