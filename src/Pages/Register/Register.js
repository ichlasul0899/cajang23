import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    console.log(email, password);

    alert(`${name} ${email} dan ${password}`);
    event.preventDefault();

    //Fetch API dan simpan token ke local storage

    //Kosong kan field
    setName("")
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    //Bersihkan fiel ketika pertama kali di load
    setName("")
    setEmail("");
    setPassword("");
  }, []);

  return (
    <div>
      <h3>Register</h3>

      <div>
        <h2>Register Cajang</h2>
        <p>CajangTech Member Register {email}</p>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <label>NAMA LENGKAP</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>EMAIL ADDRESS</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>PASSWORD</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="REGISTER" />
        </form>

        <div>
          <p>
            Sudah Daftar ? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register
