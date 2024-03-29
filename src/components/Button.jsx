import axios from 'axios'
import React from 'react'
import { useRouter } from 'next/router'

function Button() {
    const router = useRouter()
    const handleLogout=async()=>{
        await axios({
            method: "get",
            url: "http://raianvisual.ro"
        })
        router.push("/login")
    }
  return (
    <button onClick={handleLogout} className="bg-black p-2 rounded-md text-white"> 
      Logout
    </button>
  )
}

export default Button
