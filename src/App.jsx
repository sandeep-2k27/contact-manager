import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import './App.css';
import AddContacts from './Components/AddContacts';
import ContactsList from './Components/ContactsList';
import Header from './Components/Header';

function App() {
  const localStorageKey = "contact";

  //  Load initial contacts from localStorage
  const [contact, setContact] = useState(() => {
    const saved = localStorage.getItem(localStorageKey);
    return saved ? JSON.parse(saved) : [];
  });

  //  Save contacts to localStorage when they change
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact));
  }, [contact]);

  const addContact = (data) => {
    setContact([...contact, { id: uuidv4(), ...data }]);
  };

  const removeContact = (id) => {
    const updatedList = contact.filter((val) => val.id !== id);
    setContact(updatedList);
  };

  return (
    <div>
      <Header />
      <AddContacts addContact={addContact} />
      <ContactsList forList={contact} removeContact={removeContact} />
    </div>
  );
}

export default App;
