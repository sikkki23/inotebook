import React, { useEffect } from 'react'
import { Outlet,Link,  useLocation } from "react-router-dom";
import  { useNavigate  } from 'react-router-dom';

const Navbar =() => {
     let navigate = useNavigate();
    const handleLogout =() => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    let location = useLocation();
    useEffect(() => {
    //    console.log(location.pathname);
    },[location] );
  return (
      <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  <Link className="navbar-brand" to="/home">iNoteBook</Link>
                   
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
                          <li className="nav-item">
                          <Link className={`nav-link ${location.pathname==="/home" ? "active":""}`} aria-current="page" to="/home">Home</Link>
                          </li>
                          <li className="nav-item">
                          <Link className={`nav-link ${location.pathname==="/about" ? "active":""}`} to="/about">About</Link>
                          </li>
                                                    
                      </ul>
                     
                      
                  </div>
                 {!localStorage.getItem('token')? <form  className='d-flex'>
                        <Link className='btn btn-primary mx-2' to="/login" role="button">Login</Link>
                        <Link className='btn btn-primary mx-2' to="/signup" role="button">Signup</Link>
                      </form> : <button className='btn btn-primary mx-2' onClick={handleLogout} role="button">Logout</button> }
            </nav>
            <Outlet/>
      </div>
    )
}

export default Navbar
