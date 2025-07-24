import React from 'react';
import '../App.css';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactsList = ({ forList, removeContact }) => {
  const ContList = forList.map((val) => {
    return (
      <div key={val.id} className='contacts'>
        <div>{val.name}</div>
        <div>{val.email}</div>
        <span onClick={() => removeContact(val.id)}><DeleteIcon /></span>
      </div>
    );
  });

  return (
    <>
      <h2>Contacts List</h2>
      <div>{ContList}</div>
    </>
  );
};

export default ContactsList;
