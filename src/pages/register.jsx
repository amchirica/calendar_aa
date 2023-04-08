import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [apiResponse, setApiResponse] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "POST",
        url: "http://localhost:3000/api/auth/register",
        data: user,
      });
      setApiResponse(data.message);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ marginTop: "200px" }}>
      <p>{apiResponse}</p>
      <form>
        <p
          className="bg-gray-500 p-5 rounded-md text-white flex flex-wrap items-center justify-between max-w-screen-md mx-auto p-4"
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Inregistrare!
        </p>
        <br />
        <input
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="bg-black p-1 rounded-md text-white flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4"
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          type="text"
          placeholder="Enter name"
        />
        <br />
        <input
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="bg-black p-1 rounded-md text-white flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4"
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          type="email"
          placeholder="Enter email"
        />
        <br />
        <input
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="bg-black p-1 rounded-md text-white flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4"
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          type="password"
          placeholder="Enter password"
        />
        <br />
        <buttton
          onClick={(e) => handleLogin(e)}
          className="bg-blue-500 p-1 rounded-md text-white flex flex-wrap items-center justify-between max-w-screen-md mx-auto p-4"
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          type="submit"
        >
          Creaza cont
        </buttton>
        <br />
        <Link href="/login">
          <buttton
            type="submit"
            className="bg-blue-500 p-1 rounded-md text-white flex flex-wrap items-center justify-between max-w-screen-md mx-auto p-4"
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Login
          </buttton>
        </Link>
      </form>
    </div>
  );
}
