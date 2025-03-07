import React, { useState } from 'react';
import  { useNavigate  } from 'react-router-dom';

const Login =  (props) => {

    const [credentials, setCredentials] = useState({email: "",password: ""});
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        let bodydata = JSON.stringify({
            email:credentials.email,
            password:credentials.password  
          });
        const response= await fetch(`http://localhost:5000/api/auth/login`, {
            method : 'POST',
            headers: {
              'content-type' : 'application/json',
              "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdjNjZiNDQzNmJlNzYxZDU1NzhkODVlIn0sImlhdCI6MTc0MTIzMjQxMn0.FCnGygvSlwHjyglxhYV-eOUrcgoUiTr1lBYPkRJ0484"
            }, body: bodydata
      });
      console.log("body", bodydata);
      const json = await response.json();
      console.log("This is getNotes ",json);
      if(json.success)
      {
        localStorage.setItem('token',json.authToken);
        navigate("/");
        props.showAlert("Logged in Successfuly", "success");
      }else{
        props.showAlert("Invalid credentials", "danger");
      }
    }

    const onChange = (e) => {
        setCredentials({...credentials,[e.target.name]: e.target.value})
      }


    return (
        <div className='container mt-3'>
          <h2>Login to continue add note</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credentials.email} onChange={onChange}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"  name="password" value={credentials.pasword} onChange={onChange}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login