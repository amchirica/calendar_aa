// pages/Login.jsx
import React, { useState } from 'react';
import { authenticate } from '../utils/auth';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    user: '', // Modificare aici pentru a utiliza 'user' în loc de 'email'
    password: ''
  });
  const [apiResponse, setApiResponse] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const isValid = authenticate(user.user, user.password);

    if (isValid) {
      setApiResponse('Autentificare reușită!');
      router.push('/');
    } else {
      setError('User sau parolă incorecte'); // Modificare aici pentru a utiliza 'User' în loc de 'Email'
    }
  };

  return (
    <div style={{ marginTop: '200px' }}>
      <p>{apiResponse}</p>
      <p className="bg-gray-500 p-5 rounded-md text-white flex flex-wrap items-center justify-between max-w-screen-md mx-auto p-4" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Bine ai venit!</p>
      <br />
      <input value={user.user} onChange={(e) => setUser({ ...user, user: e.target.value })} className="bg-black p-1 rounded-md text-white flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }} type="text" placeholder='Enter user' />
      <br />
      <input value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className="bg-black p-1 rounded-md text-white flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }} type="password" placeholder='Enter password' />
      <br />
      <button onClick={(e) => handleLogin(e)} className="bg-blue-500 p-1 rounded-md text-white flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">Login</button>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {/* <Link href="/register"><button className="bg-blue-500 p-1 rounded-md text-white flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">Register</button></Link> */}
      <br />
      <p className="bg-gray-500 p-5 rounded-md text-white flex flex-wrap items-center justify-between max-w-screen-md mx-auto p-4" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Acesta este un cont al Raian Visual! <br /> Persoanele neautorizate nu se pot conecta!</p>
    </div>
  );
};

export default Login;
