import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    console.log(email, password)
    
    alert(`${email} dan ${password}`)
    event.preventDefault();

    //Fetch API dan simpan token ke local storage

    //Kosong kan field
    setEmail('')
    setPassword('')
  }

  useEffect(() => {
    //Bersihkan fiel ketika pertama kali di load
    setEmail("");
    setPassword("");
  }, [])

  const handleLupasPassword = () => {
    alert('Makanya klo punya passwor diingat')
  }

  return (
    <div>
      <h3>Login</h3>

      <div>
        <h2>Sign In</h2>
        <p>CajangTech Member Login {email}</p>
        <div>
          <form onSubmit={handleSubmit}>
            <label>EMAIL ADDRESS</label>
            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>PASSWORD</label>
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type='submit' value='LOG IN' />
          </form>

          <div>
            <p>Belum Daftar ? <Link to='/register'>Register</Link></p>
            <p style={{cursor:'pointer'}} onClick={handleLupasPassword}>
              Lupa password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
