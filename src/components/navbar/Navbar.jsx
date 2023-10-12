import { useContext } from "react";
import "./navbar.css"
import {Link} from "react-router-dom"
import { authContext } from "../../context/authContext";
const Navbar = () => {

  const {user,dispatch} = useContext(authContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit" , textDecoration:"none"}}>
        <span className="logo">Shark-booking</span>
        </Link>
        { user ? (
          <div style={{display:"flex" , alignItems:"center" , gap:"15px"}}>
            <h3>{user.user_name}</h3>
            <button onClick={()=>{
              dispatch({type:"LOGOUT"})
            }}  className="logout">LOG OUT</button>
          </div>
        ) : (
        <div className="navItems">
          
            <Link to="/register">
            <button className="navButton">Register</button>
  
            </Link>
            <Link to="/login">
            <button className="navButton">Login</button>
            </Link>
            </div>
          )}
          
        
      </div>
    </div>
  )
}

export default Navbar