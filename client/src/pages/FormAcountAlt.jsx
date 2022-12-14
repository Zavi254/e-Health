import React, { useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';


function FormAcountAlt({handleSubmit,word}) {
          
const [formData,setData] = useState({})
const[data,setUser]=useState('');
const navigate=useNavigate();


    useEffect(()=>{
        fetch('')
        .then(res=>res.json())
        .then(data=>setUser(data))
      },[])

    function handleChange(event) {
        const name=event.target.name;
        const value=event.target.value;
        setData({
          ...formData,
          [name]: value,
        })
      
      }
      
  return (
    <form id='log' onSubmit={handleSubmit}>
    <h2 className="heading">Villa</h2>
    
        <input type="email" name="email" id="username-field" className="login-button" placeholder="Email" onChange={handleChange} required></input>
        <input type="password" name="password" id="password-field" className="login-button" placeholder="Password" onChange={handleChange} required></input>
    
    <button type='submit' classNameName='log' id='logIn'>{word}</button>

    <h3 id="password"><a href ="##">forgot password?</a></h3>
    <div className="horizontal">
        <div className="hor"><hr/>
        </div>
        <h3>OR</h3>
        <div className="hor"><hr/>
        </div>
    </div>
    <h3 id="account">Don't have an account? <Link to="" id="sign">Sign up</Link></h3>
  </form>
  )
}

export default FormAcountAlt
