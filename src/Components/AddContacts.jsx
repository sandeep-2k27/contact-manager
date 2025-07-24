import React, { useState } from 'react'
import '../App.css'
const AddContacts = ({addContact}) => {           //Here we are passing contactData as props from App.jsx accesssing data from child to parents
const [contactData,setContactData]=useState({name:'',email:''});


const handleChange=(e)=>{
if(e.target.name==='name'){
    setContactData({...contactData,name:e.target.value});
}
else{
    setContactData({...contactData,email:e.target.value});
}
}

const handleAdd=()=>{
    if(contactData.name==='' || contactData.email===''){
        alert("Please fill the details");
        return;
    }
    addContact(contactData);
    //After calling and saving we empty this 
    setContactData({name:'',email:''});
}
  return (
    <div className='formHeader'>
    <div className='add-contacts'>Add Contact</div>
    <form>
        <label>Name:</label><br />
        <input type="text" placeholder='Enter Name' name='name' value={contactData.name} onChange={handleChange} /><br />
        <label>Email:</label><br />
        <input type="email" placeholder='Enter Email:' name='email' value={contactData.email} onChange={handleChange} />
    </form>
    <button className='btn' onClick={handleAdd}>Add Contacts</button>
    </div>
  )
}

export default AddContacts