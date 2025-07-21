import axios from "axios";
import React,{useEffect, useState} from "react";
function ShowData() {
    let [user ,setUser]= useState([])

    useEffect(() => {
    Datalao()
    }, [])

    async function Datalao(){
        await axios.get("http://localhost:4000/show").
        then((a)=>{
            console.log(a.data)
            setUser(a.data)
        }).catch((e)=>{
            console.log(e.message)
        })
    }
  return(
    <div>
        <h1>User Records</h1>
        <div className="container">
            <div className="row">
                {user.map((i)=>(
                    <div
                        class=" mt-3 col-md-3">
                            <div className="card" key={i._id}>
                        <div class="card-body">
                            <h4 class="card-title">{i.name}</h4>
                            <p class="card-text">{i.email}</p>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  ) 
  }
  export default ShowData;