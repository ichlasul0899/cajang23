import React, { useState } from 'react'
import MateriCard from './MateriCard'

const ListKelas = () => {
  const [daftarMateri] = useState([
    {
      judul: "Basic Programming include html, css, javascript, node js ",
      descripsi:
        "Ini adalah kelas dasar untuk menjadi web developer.Materinya cocok untuk yang suka front enda dan berguna untuk mahir di back end karena menggunakan node js",
      price: "Rp. 1.899.999",
      score: "0",
      autho: "DRA",
    },
    {
      judul: "React JS basic guide from zero to hero ",
      descripsi:
        "Untuk menjadi front end developer, react js adalah salah satu framework yang popular.",
      price: "Rp. 1.899.999",
      score: "0",
      autho: "DRA",
    },
    {
      judul: "Mongo DB - The Complete Developer's Guide 2021",
      descripsi:
        "Master MongoDB Development for Web & Mobile Apps. CRUD Operations, Indexes, Aggregation Framework - All about MongoDB!",
      price: "Rp. 1.899.999",
      score: "4,7",
      autho: "Academind by Maximilian",
    },
    {
      judul: "iOS & Swift - The Complete iOs App Development Bootcamp",
      descripsi:
        "From Beginner to iOS App Developer with Just One Course! Fully Updated with a Comprehensive Module Dedicated to SwiftUI!",
      price: "Rp. 1.899.999",
      score: "4,8",
      autho: "Dr Angela Yu",
    },
    {
      judul: "NodeJS-The Complete Guide(MVC, REST APIs, GraphQL, Deno)",
      descripsi:
        "Build Native iOS & Android as well as Progressive Web Apps with Angular, Capacitor and the Ionic Framework (Ionic 4+).",
      price: "Rp. 1.899.999",
      score: "4,7",
      autho: "Academind by Maximilian",
    },
  ]);
  return (
    <div>
      {daftarMateri.map((materi) => {
        return <MateriCard data={materi} />;
      })}
    </div>
  )
}

export default ListKelas
