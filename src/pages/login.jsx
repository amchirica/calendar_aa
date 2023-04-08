import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Login() {
  const router=useRouter()
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const [apiResponse, setApiResponse] = useState()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const {data} = await axios({
            method: 'POST',
            url: 'http://localhost:3000/api/auth/login',
            data: user
        })
        setApiResponse(data.message)
        console.log(data, 'getting data');
        router.push("/")
    } catch (err) {
        console.log(err);
    }
    }

  return (
    <div style={{marginTop: '200px'}}>
      <p>{apiResponse}</p>
      <p className="bg-gray-500 p-5 rounded-md text-white flex flex-wrap items-center justify-between max-w-screen-md mx-auto p-4" style={{textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Bine ai venit!</p>
      <br />
        <input value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} className="bg-black p-1 rounded-md text-white flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4" style={{textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}} type="text" placeholder='Enter email'/>
        <br />
        <input value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} className="bg-black p-1 rounded-md text-white flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4" style={{textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}} type="password" placeholder='Enter password'/>
        <br />
        <button onClick={(e) => handleLogin(e)} className="bg-blue-500 p-1 rounded-md text-white flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">Login</button>
        <br />
        {/* <Link href="/register"><button className="bg-blue-500 p-1 rounded-md text-white flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">Register</button></Link> */}
        <br />
      <p className="bg-gray-500 p-5 rounded-md text-white flex flex-wrap items-center justify-between max-w-screen-md mx-auto p-4" style={{textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Acesta este un cont al Raian Visual! <br /> Persoanele neautorizate nu se pot conecta!</p>

    </div>
  )
}

