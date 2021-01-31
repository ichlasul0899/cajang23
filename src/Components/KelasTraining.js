import React, {useState, useEffect} from 'react'
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const InfoKelas = () => {
  return (
    <h3>Info Kelas</h3>
  )
}
const MateriKelas = () => {
  return <h3>Materi</h3>;
};

const KelolaTugas = () => {
  return <h3>Kelola Tugas</h3>;
};
const Quiz = () => {
  return <h3>Quiz</h3>;
};

const RekapNilai = () => {
  return <h3>Rekap Nilai</h3>;
};

const KelasTraining = () => {
  const { id } = useParams()
  const match = useRouteMatch()

  return (
    <div>
      <h3>Requested topic ID: {id}</h3>

      <div>
        <ul>
          <li>
            <Link to={`${match.url}/info-kelas`}>Info kelas</Link>
          </li>
          <li>
            <Link to={`${match.url}/materi-kelas`}>Materi</Link>
          </li>
          <li>
            <Link to={`${match.url}/kelola-tugas`}>Kelola Tugas</Link>
          </li>
          <li>
            <Link to={`${match.url}/quiz`}>Quiz</Link>
          </li>
          <li>
            <Link to={`${match.url}/rekap-nilai`}>Rekap Nilai</Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route path={`${match.path}/info-kelas`}>
          <InfoKelas />
        </Route>
        <Route path={`${match.path}/materi-kelas`}>
          <MateriKelas />
        </Route>
        <Route path={`${match.path}/kelola-tugas`}>
          <KelolaTugas />
        </Route>
        <Route path={`${match.path}/quiz`}>
          <Quiz />
        </Route>
        <Route path={`${match.path}/rekap-nilai`}>
          <RekapNilai />
        </Route>
        <Route path={match.path}>
          <h3>Home Kelas Training</h3>
        </Route>
      </Switch>
    </div>
  );
}
export default KelasTraining
