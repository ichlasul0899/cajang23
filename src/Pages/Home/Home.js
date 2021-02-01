import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import ScoreCard from '../../Components/ScoreCard'
import KelasCard from "../../Components/KelasCard";
import Footer from "../../Components/Footer";
import CTE from "../../assets/image/CTELOGO.png";


const Home = () => {

  const [scores, setScores] = useState([
    {
      icons: "Hai",
      title: "Student",
      rate: 1,
    },
    {
      icons: "Hai2",
      title: "Teacher",
      rate: 2,
    },
    {
      icons: "Hai3",
      title: "Rating",
      rate: 0,
    },
  ]);

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
      <div className="backgroundLp">
        <div className="mycontainer">
          <div style={{ width: "70%", padding: '20px 0' }}>
            <h2 style={{margin: '0'}}>Wujudkan Karirmu Sebagai Programmer</h2>
            <p>
              Kuasai skill pemrograman dalam waktu singkat. Kamu akan dilatih
              oleh instruktur profesional untuk menjadi seorang Full Stack
              Developer.
            </p>
            <div style={{backgroundColor: '#eaeaea', margin: '20px 0', padding: '20px', borderRadius: '10px'}}>
              <div style={{ display: "flex", alignContent: "center" }}>
                <img width="80px" height="80px" src={CTE} alt="" />
                <div style={{ marginLeft: "20px", textAlign: "left" }}>
                  <h3 style={{ margin: "0" }}>CTE</h3>
                  <p>
                    Cajang Tech Edu (CTE) adalah Program pembelajaran untuk
                    pemula yang ingin menjadi seorang Full Stack Developer.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", alignContent: "center" }}>
                <img width="80px" height="80px" src={CTE} alt="" />
                <div style={{ marginLeft: "20px", textAlign: "left" }}>
                  <h3 style={{ margin: "0" }}>CTE</h3>
                  <p>
                    Cajang Tech Edu (CTE) adalah Program pembelajaran untuk
                    pemula yang ingin menjadi seorang Full Stack Developer.
                  </p>
                </div>
              </div>
            </div>
            <Link className="mybutton" to="/register">
              Daftar Sekarang
            </Link>
          </div>
          {/* <div style={{ border: "1px solid red" }}>
            <h2>Hai</h2>
          </div> */}
        </div>
      </div>
      <div className="backgroundStatistik">
        <div style={{ display: "flex", }}>
          {scores.map((score) => {
            return <ScoreCard data={score} />;
          })}
        </div>
      </div>
      {/* <div>
        <h2>Kenapa belajar programming ?</h2>
        <p>
          Ya karena kebutuhan jaman sekarang yang sedang membutuhkan banyak
          programmer yang kreatif untuk bisa hidup di jaman yang serba cepat!
          Kata daffa
        </p>
      </div>
      <div>
        <h2>Tunggu apa lagi ?</h2>
        <p>
          Cajang Tech bisa memberi mu penagalaman untuk memiliki skill
          programming. Materi terstruktur dan menjadikan kamu sebagai full stack
          developer yang handal! Kata Nya
        </p>
      </div> */}
      <div className="backgroundKelas">
        <div className="containerKelas">
          <h2 style={{ color: "white" }}>Kelas Dasar</h2>
          <div className="listKelas">
            {paket.map((kelas, index) => {
              return <KelasCard data={kelas} />;
            })}
          </div>
        </div>
      </div>
      <div className="backgroundSosmed">
        <div style={{ padding: "20px" }}>
          <h1 style={{ margin: "0" }}>
            Mulai karir di bidang teknologi bersama CTE
          </h1>
          <div style={{ textAlign: "center", margin: "20px" }}>
            <Link
              style={{
                border: "1px solid black",
                padding: "10px 20px",
                borderRadius: "5px",
                backgroundColor: "rgb(243, 122, 122)",
                color: "whitesmoke",
              }}
              to="/register"
            >
              Daftar Sekarang
            </Link>
            <a
              style={{
                color: "black",
                marginLeft: "20px",
                fontWeight: "bold",
              }}
              href="/"
              onClick={() => {
                alert("Sedang di konstruksi brader!");
              }}
            >
              Hubungi kami !
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home
