import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./HomePage.css"

const HomePage = () => {
    const navigate = useNavigate()
    const handleSignup = () => {
        navigate("/signup")
    }
    const handleLogin = () => {
        navigate("/login")
    }
  return (
    <>
    <div className='homepage__container'>
        <div className='homepage__content'>
        <h1>Welcome!!</h1>
        <div className='homepage__button_content'>
            <button onClick={handleSignup} className="login__button">SignUp</button>
            <button onClick={handleLogin} className="login__button">Login</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default HomePage
