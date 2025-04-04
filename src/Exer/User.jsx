import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUsers } from '../slices/userSlice';
import { useNavigate } from 'react-router-dom';

const User = () => {

  const dispatch=useDispatch();
  const navigate = useNavigate();



const [fname,setFname]=useState("");
const [age,setAge]=useState("");
const [city,setCity]=useState("");


//CLick
const handleClick = (e) => {
    e.preventDefault();
    dispatch(addUsers({ fname, age, city }));
    navigate("/userlist"); 
};




  return (
    <>
    <form >
    <label>Name</label>
    <input type="text" value={fname} onChange={(e)=>setFname(e.target.value)} />
    <label>Age</label>
    <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} />
    <label>City</label>
    <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} />
    <button onClick={handleClick}>ADD</button>
    </form>
    </>
  )
}

export default User