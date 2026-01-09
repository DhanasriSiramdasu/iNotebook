import React,{useState} from 'react'

const Signup = (props) => {
  const [credentials,setCredentials]=useState({name:"",email:"",password:""});
  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.id]:e.target.value});
  }

  const createUser=async ()=>{
    const response=await fetch(`http://localhost:5000/api/auth/createuser`,{
      method:'POST',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password}),
    });
    const json=await response.json();
    console.log(json);
    if(json.authtoken){
      props.showAlert("success","User created successfully");
    } else {
      props.showAlert("danger","Invalid credentials");
    }
  };
  const handleOnSubmit = (e)=>{
    e.preventDefault();
    props.showAlert("success","Credentials submitted successfully");
    createUser();
  }
  return (
    <div className="container mt-3">
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="signupname" className="form-label">Username</label>
          <input type="text" className="form-control" id="name" value={credentials.name} onChange={onChange}/>
            <div id="name" className="form-text">Username should have atleast 5 characters</div>
        </div>
        <div className="mb-3">
          <label htmlFor="signupemail" className="form-label">Email address</label>
          <input type="text" className="form-control" id="email" aria-describedby="emailHelp" value={credentials.email} onChange={onChange}/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="signuppassword" className="form-label">Password</label>
          <input type="text" className="form-control" id="password" value={credentials.password} onChange={onChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup
