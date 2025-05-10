import React, { useState } from 'react'
import axios from 'axios';

const Register = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [register,setRegister] = useState(false);

    const submitHandler = (e) => {
           e.preventDefault();
           
           const configuration = {
              method:"POST",
              url:"https://backend-authorization.herokuapp.com/register",
              data:{
                  email,
                  password
              }
           }

           axios(configuration)
           .then((result) => {
             setRegister(true);
           })
           .catch((error) => {
             error = new Error();
           });
    }


   return (
   
         <form style={{width:250}} onSubmit={submitHandler}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)}></input>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
  {register ? (<p className='text-success'>User Registered Successfully!</p>) : (<p className='text-danger'>You are not registered!</p>)}
</form>
    
   
  )
}

export default Register