import './App.css';
import { useState,useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import AddContact from './components/AddContact';
import ContactsList from './components/ContactsList';
import ContactSingle from './components/ContactSingle';
import Home from './components/Home';

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts,setContacts] = useState([])
 
  const contactHandler = (contact) => {
  
    setContacts([...contacts, {id:Math.random() * 1000, ...contact}])
    alert("Contact Saved Successfully!")
  }

  const removeContact = (id) => {
     const newContactList = contacts.filter((contact) => {
       return contact.id !== id;
     })

     setContacts(newContactList)
  }

  useEffect(() => {
    const contactReceiver = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(contactReceiver){
      setContacts(contactReceiver)
    }
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  },[contacts])

  return (
    <Router>
           <Navbar />

           <Routes>
            
           <Route path="/" element={<Home/>}/>
           
          <Route path="/add" element={<AddContact contactHandler={contactHandler}/>} />
        
           <Route path="/allcontacts" element={<ContactsList  getContactId={removeContact} contacts={contacts} />}/>
          
           </Routes>
           </Router>
  );
}

export default App;
