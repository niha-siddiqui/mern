import axios from 'axios';
import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"



function SaveData() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [age, setage] = useState(0);

  const  submitfunc = async (e) =>{
    e.preventDefault();
    try {
      let user_regex = /^[a-zA-Z]{2,15}$/
    let password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

      if(!name || !email || !password || age <=0 ){
        toast.error("All fields are required")

      }
      if(!user_regex.test(name)){
        toast.error("Invalid username")
        return

      }
      if(!password_regex.test(password)){
        toast.error("password must be strong")
        return

      }

      await axios.post("http://localhost:4000/save/", {
        name: name,
        email: email,
        password: password,
        age: age
      }).then((a) => {
       toast.success(a.data.msg)
      })
    }
      catch(error){
        if (error.status === 409){
          alert(error.response?.data.msg)
        }
      else{
       toast.success(error.response?.data.msg)

      }
    } 
  };

  return (
    <div className="container mt-5">
      <ToastContainer/>
      <h2 className="text-center mb-4">SAVE DATA FORM</h2>
      <hr />

      <div className="mb-3">
        <label className="form-label">Enter your name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Enter your email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Enter your password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Enter your age</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setage(e.target.value)}
        />
      </div>

      <button className="btn btn-success mt-3" type="submit" onClick={submitfunc}>
        Submit
      </button>
    </div>
  );
}

export default SaveData;