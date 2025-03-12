import React from 'react'
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
  const {session, signOut} = UserAuth()
  const navigate = useNavigate()
  
  console.log(session)

  const handleSignOut = async (e) => {
    e.preventDefault()
    try{
      await signOut()
      navigate('/')
    }catch(err){
      console.error(err)
    }
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {session?.user?.email}</h2>
      
      <div>
      <p onClick={handleSignOut} className="hover:cursor-pointer border inline-block px-4 py-3 mt-4">Sign Out</p>      </div>
    </div>
  )
}

export default Dashboard
