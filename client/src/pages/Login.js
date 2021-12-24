import React from 'react';
import { useState } from 'react';

function Login() {
   // useState to get the data from the input tags;
   const [email, setemail] = useState("");
   const [password, setpassword] = useState("");

   // this function is to fedge the json data fromt the Api in server side;
   async function registerUser(event) {
      event.preventDefault()
      const responce = await fetch('http://localhost:9000/api/login', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            'email': email,
            'password': password
         }),
      })
      const responced = await responce.json()
      console.log(responced)
   }


   return (
      <div style={{ textAlign: 'center' }}>
         <h1>Login form</h1>
         <form onSubmit={registerUser}>

            <label>Email: </label><br />
            <input
               value={email}
               type='email'
               placeholder='@gmail.com'
               onChange={(e) => { setemail(e.target.value) }} /><br />
            <label>Password: </label><br />
            <input
               value={password}
               type='password'
               onChange={(e) => { setpassword(e.target.value) }} /><br />

            <button type='submit'>Register</button>
         </form>
      </div>
   );
}

export default Login
