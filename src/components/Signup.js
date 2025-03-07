import React, { useState } from 'react';
import  { useNavigate  } from 'react-router-dom';

const Signup = (props) => {

  const [credentials, setCredentials] = useState({name : "",email: "",password: "",cpassword: ""});
  let navigate = useNavigate();
  const {name,email,password} = credentials;
  const handleSubmit = async (e) => {
      e.preventDefault();

      let bodydata = JSON.stringify({
          name:name,
          email:email,
          password:password  
        });
      const response= await fetch(`http://localhost:5000/api/auth/createuser`, {
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
      props.showAlert("Account Created Successfuly", "success");
    }else{
      props.showAlert("Invalid credentials", "danger");
    }
  }

  const onChange = (e) => {
      setCredentials({...credentials,[e.target.name]: e.target.value})
    }


  return (
    <div>
      <div className='container mt-3'>
      <h2>Create an Account to use inotebok</h2>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="nameHelp" name="name" required minLength={5} value={credentials.name} onChange={onChange}/>
                    </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" required minLength={5} value={credentials.email} onChange={onChange}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"  name="password" required minLength={5} value={credentials.pasword} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cexampleInputPassword1"  name="cpassword" required minLength={5} value={credentials.pasword} onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Signup