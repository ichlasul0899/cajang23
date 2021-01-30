import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  const style = {
    width: '60%',
    margin: 'auto',
    boxShadow: '0 2px 3px #ccc',
    padding: '16px',
    textAlign: 'center',
  }

  const socialMedia = [
    { title: "facebook", link: "http:google.com" },
    { title: "instagram", link: "http:google.com" },
    { title: "discord", link: "http:google.com" }
  ];

  const [paket] = useState([
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
      <h3>Home</h3>
      <div style={style}>
        <h2>Disini ada judul yang menarik!</h2>
        <p>
          Kami membantu anda untuk menjadi programmer secara intensif, dipandung
          1 0n 1 oleh mentor berpengalaman. Namanya Daffa.
        </p>
        <div>
          <button>
            <Link to="/register">Register</Link>
          </button>
          <button>
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
      <div style={style}>
        <h2>Kenapa belajar programming ?</h2>
        <p>
          Ya karena kebutuhan jaman sekarang yang sedang membutuhkan banyak
          programmer yang kreatif untuk bisa hidup di jaman yang serba cepat!
          Kata daffa
        </p>
      </div>
      <div style={style}>
        <h2>Tunggu apa lagi ?</h2>
        <p>
          Cajang Tech bisa memberi mu penagalaman untuk memiliki skill
          programming. Materi terstruktur dan menjadikan kamu sebagai full stack
          developer yang handal! Kata Nya
        </p>
      </div>
      <div style={style}>
        <h2>Kelas Dasar</h2>
        <ul>
          {paket.map((e, index) => {
            return (
              <div
                style={{
                  boxShadow: "0 2px 3px #ccc",
                  border: "1px solid yellow",
                  marginBottom: "10px",
                }}
              >
                <h3>{e.judul}</h3>
                <p>{e.descripsi}</p>
                <p>{e.price}</p>
                <p>{e.score}</p>
                <p>{e.autho}</p>
              </div>
            );
          })}
        </ul>
      </div>
      <div style={style}>
        <h2>Tertarik Untuk Bergabung ?</h2>
        <p>Silahkan konsultasi via social media kami</p>
        <div style={style}>
          <h3>Social Media</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {socialMedia.map((e, index) => {
              return (
                <div
                  style={{
                    margin: "10px 20px",
                    padding: "16px",
                    border: "1px solid black",
                    height: "40px",
                  }}
                >
                  <a href={e.link}>{e.title}</a>
                </div>
              );
            })}
          </div>
        </div>
        <p>Atau daftar sekarang!</p>
        <button>
          <Link to="/register">Register</Link>
        </button>
      </div>
    </div>
  );
}

export default Home
