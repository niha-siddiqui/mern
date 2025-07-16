import axios from 'axios';
import React, { useState } from 'react';



function SaveData() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [age, setage] = useState(0);

  async function submitfunc() {
    try {
      await axios.post("http://localhost:4000/crud/save", {
        name: name,
        email: email,
        password: password,
        age: age
      }).then(() => {
        alert("Data saved successfully");
      }).catch((e) => {
        console.log(e.message);
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container mt-5">
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