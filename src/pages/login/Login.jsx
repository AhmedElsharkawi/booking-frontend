import  { useContext, useState } from 'react'
import "./Login.css"
import axios from "axios"
import { authContext } from '../../context/authContext'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [credentials, setCredentials]= useState({
        user_name: "",
        password: "",


    });

    const navigate = useNavigate()

    const {user, loading, error, dispatch} = useContext(authContext);

    const handleChange =(e)=>{
        setCredentials((prev)=>({...prev, [e.target.id]:e.target.value}))
    };



const handleLogin = async(e)=>{
e.preventDefault()
dispatch({type:"LOGIN_START"})
try {

    const res = await axios.post(`${process.env.REACT_APP_DOMAIN_URL}/auth/login`,credentials) 
    dispatch({type:"LOGIN_SUCCESS", payload: res.data})
    navigate("/")
} catch (err) {
    dispatch({type:"LOGIN_FAILURE", payload: err.response.data})

}}



    
  return (
    <div className='login'>
        <div className='wrapper'>
            <input type='text' placeholder='Username' id='user_name' onChange={handleChange}/>
            <input type='password' placeholder='Password' id='password' onChange={handleChange}/>
            <button disabled={loading}  onClick={handleLogin}>Login</button>
            <Link to="/"  style={{textDecoration:"none", fontSize:"12px"}}>Go back to Homepage</Link>
            {error && <span>{error.message} </span>}

        </div>
    </div>
  )
}

export default Login