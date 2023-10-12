import  { useContext, useState } from 'react'
import "./Register.css"
import axios from "axios"
import { authContext } from '../../context/authContext'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const [credentials, setCredentials]= useState({
        user_name: "",
        password: "",
        email:"",


    });

    const navigate = useNavigate()

    const { loading, error, dispatch} = useContext(authContext);

    const handleChange =(e)=>{
        setCredentials((prev)=>({...prev, [e.target.id]:e.target.value}))
    };



const handleregister = async(e)=>{
e.preventDefault()
dispatch({type:"LOGIN_START"})
try {

    const res = await axios.post(`${process.env.REACT_APP_DOMAIN_URL}/auth/register`,credentials) 
    
    dispatch({type:"LOGIN_SUCCESS", payload: res.data})
    navigate("/")
} catch (err) {
    dispatch({type:"LOGIN_FAILURE", payload: err.response.data})
    

}}



    
  return (
    <div className='register'>
        <div className='wrapper'>
            <input type='text' placeholder='Username' id='user_name' onChange={handleChange}/>
            <input type='email' placeholder='email' id='email' onChange={handleChange}/>
            <input type='password' placeholder='Password' id='password' onChange={handleChange}/>
            <button disabled={loading}  onClick={handleregister}>register</button>
            <Link to="/"  style={{textDecoration:"none", fontSize:"12px"}}>Go back to Homepage</Link>
            {error && <span style={{fontSize:"10px", color:"red"}} >{error } </span>}
           

        </div>
    </div>
  )
}

export default Register