import axios from "axios";
import React,{useEffect, useState} from "react";
import { data } from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify/unstyled";
function ShowData() {
    let [user ,setUser]= useState([])
    let [search, setSearch] = useState('')
  let [sortOption, setSortOption] = useState('')







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

// filter 







  // Filtered data based only on name
  let filteredUsers = user.filter((i) =>
    i.name.toLowerCase().includes(search.toLowerCase())
  )

  // Sorting logic
  if (sortOption === "nameAsc") {
    filteredUsers.sort((a,b) => a.name.localeCompare(b.name))
  } else if (sortOption === "nameDesc") {
    filteredUsers.sort((a,b) => b.name.localeCompare(a.name))
  } else if (sortOption === "ageAsc") {
    filteredUsers.sort((a,b) => a.age - b.age)
  } else if (sortOption === "ageDesc") {
    filteredUsers.sort((a,b) => b.age - a.age)
  }

  async function DeleteRecord(id,n) {
    if (window.confirm(`are you sure you want to delete ${n} record`)) {
      await axios.delete(`http://localhost:4000/remove/${id}`).then(()=>{
        toast.success("record deleted successfully");
        Datalao()
      }).catch((e)=>
    toast.error(e.msg)
)
    }
  }


  return (
    <div
  className="main-background"
  style={{
    backgroundColor: "#f8f9fa",
    minHeight: "100vh",
    paddingTop: "30px",
    paddingBottom: "30px",
  }}
><ToastContainer/>
  <div className="container">
    
    <h1
      className="text-center mb-5 fw-bold"
      style={{ fontSize: "2.5rem" }}
    >
      User Record
    </h1>

    {/* Search input and Sort dropdown */}
    <div className="row mb-5">
      <div className="col-md-4 offset-md-2 mb-3 mb-md-0">
        <input
          type="text"
          placeholder="Search by name"
          className="form-control shadow-sm rounded-pill"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "12px 20px",
            fontSize: "1rem",
            border: "1px solid #ced4da",
          }}
        />
      </div>
      <div className="col-md-4">
        <select
          className="form-control shadow-sm rounded-pill"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          style={{
            padding: "12px 20px",
            fontSize: "1rem",
            border: "1px solid #ced4da",
          }}
        >
          <option value="">Sort</option>
          <option value="nameAsc">Name A to Z</option>
          <option value="nameDesc">Name Z to A</option>
          <option value="ageAsc">Age Low to High</option>
          <option value="ageDesc">Age High to Low</option>
        </select>
      </div>
    </div>

    <div className="row">
      {filteredUsers.map((i) => (
        <div className="col-md-4 mb-4" key={i._id}>
          <div
            className="card user-card"
            style={{
              border: "none",
              borderRadius: "15px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
              background: "linear-gradient(135deg, #FFFFFFFF, #ffffff)",
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 12px 24px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 16px rgba(0, 0, 0, 0.1)";
            }}
          >
            <div className="card-body text-center">
              <h5
                className="card-title fw-bold"
                style={{ fontSize: "1.4rem" }}
              >
                {i.name}
              </h5>
              <p className="card-text text-muted">{i.email}</p>
              <p className="card-text text-secondary">
                <strong>Age:</strong> {i.age}
              </p>

              {/* Buttons (no functions, only visible) */}
              <div className="d-flex justify-content-center mt-3">
                <button
                  className="btn me-2"
                  style={{
                    borderRadius: "25px",
                    padding: "6px 20px",
                    fontSize: "0.9rem",
                    backgroundColor: "#DBF1B6FF", // purple
                    color: "#fffff",
                    border: "none",
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn"
                  style={{
                    borderRadius: "25px",
                    padding: "6px 20px",
                    fontSize: "0.9rem",
                    backgroundColor: "#DD8383FF", // dark red
                    color: "#fffff",
                    border: "none",
                  }}
                  onClick={()=>{DeleteRecord(i._id,i.name)}}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {filteredUsers.length === 0 && (
      <h4 className="text-center text-muted">No user found</h4>
    )}
  </div>
</div>
      )
    }
  export default ShowData;



  