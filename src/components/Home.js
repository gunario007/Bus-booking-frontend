import React from 'react'
import axios from "axios"
import { useState } from 'react';


const Home = () => {


    // let navigate = useNavigate();

    const [user, setUser] = useState({
      from : "",
      to : "",
      date : ""
     
    });
   
  
    const { from,to,date} = user;
  
    const onInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
  
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8080/api/bus/create", user);
     
    };
  return (
    <div>
       
        


        <form onSubmit={(e) => onSubmit(e)}>

        
            <div className="mb-3">
              <label htmlFor="From" className="form-label">
                From
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your from destination"
                name="firstName"
                value={from}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="To" className="form-label">
                TO
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your to destination"
                name="to"
                value={to}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Date" className="form-label">
                Date
              </label>
              <input
                type={"date"}
                className="form-control"
                placeholder="Enter your date"
                name="date"
                value={date}
                onChange={(e) => onInputChange(e)}
              />
            </div>
       

        <button 
        type="submit" className="btn btn-outline-primary" >Search</button>
     
       
    </form>
    </div>
  )
}

export default Home
