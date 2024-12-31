import React, { useState,useEffect } from 'react';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]); // Renamed state to `contacts`
  const LOCAL_STORAGE_KEY = "contacts";
  const addContactHandler = (newContact) => {
    console.log(newContact);
    setContacts([...contacts, { id: Date.now(), ...newContact }]);; // Append the new contact to the existing list
  };
  const deleteContactHandler =(id)=>{
    const updateContact =contacts.filter((contact)=> contact.id!==id);
    setContacts(updateContact);
  }
  useEffect(() => {
    const retrievedItem = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log("Retrieved Item:", retrievedItem); // Check the output
    if (retrievedItem) {
      setContacts(JSON.parse(retrievedItem));
    }
  }, []);
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY ,JSON.stringify(contacts));
  },[contacts])
  
  
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contact={contacts} deleteContactHandler={deleteContactHandler}/>
    </div>
  );
}

export default App;
