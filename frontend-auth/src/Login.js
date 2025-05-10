import React,{useState} from 'react'
import axios from "axios";
import Cookies from 'universal-cookie';
const cookies = new Cookies()
const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [login,setLogin] = useState(false);

    const submitHandler = (e) => {
           e.preventDefault();
           
           const configuration = {
              method:"POST",
              url:"https://backend-authorization.herokuapp.com/login",
              data:{
                  email,
                  password
              }
           }

           axios(configuration)
           .then((result) => {
             setLogin(true);
             // set the cookie
            cookies.set("TOKEN", result.data.token, {
            path: "/"
            });

             // Navigate user to the auth page
             window.location.href = "/auth";
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
  {login ? (<p className='text-success'>User Logged in Successfully!</p>) : (<p className='text-danger'>You are not logged in!</p>)}
</form>
    
   
  )
}

export default Login