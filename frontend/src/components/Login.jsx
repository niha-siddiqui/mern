import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

export default function Login() {
    let[email ,setemail]=useState("");
  let[password ,setpassword]=useState("");
  let nav = useNavigate()
  async function LoginLogic(){
    try {
        if(!email || !password){
            toast.error("All fields are required")
        return;
        }
        await axios.post("http://localhost:4000/login",{
            email : email,
            password :password
        })
        .then((a)=>{
            setemail("")
            setemail("")
            localStorage.setItem("userinfo" ,JSON.stringify(a.data.user))
            toast.success("login successfl");
            nav("/ShowData")
        }).catch((e)=>{
            toast.error(e.message)
        })
    } catch (error) {
        toast.error(error.response?.data.msg)
    }
  }


  return (
    <div className="container mt-5">
    <ToastContainer/>
    <h2 className="text-center mb-4"> Login </h2>
    <hr />
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
    <button className="btn btn-success mt-3" type="submit" onClick={LoginLogic}>
      Signin
    </button>
    <br />
    <Link className="mt-3" to ="/fp">ForgetPassword</Link>
  </div>
  )
}
