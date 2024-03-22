import './App.css';
import contactList from '../contactList.json';
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';

function App() {
  const getInitialState = () => {
    const savedContacts = JSON.parse(localStorage.getItem('saved-contacts'));
    return savedContacts ? savedContacts : contactList;
  };

  const [contacts, setContacts] = useState(getInitialState);
  const [wantedName, setWantedContact] = useState('');
  const visibleContact = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(wantedName.toLowerCase());
  });

  useEffect(() => {
    localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);


  const addNewContact = (contact) => {
    setContacts((prev) => {
      return [contact, ...prev]; 
    });
  };

  const deleteContact = contactId => {
    setContacts(prev => {
      return prev.filter(contact => {
        return contactId !== contact.id;
      });
    });
  };

  return (
    <div className="container">
      <h1 className="main-title">
        Phonebook
      </h1>
      <div className="phonebook-wrapper">
        <div className="form-and-filter-wrapper">
          <ContactForm addingContact={addNewContact}></ContactForm>
          <SearchBox value={wantedName} setter={setWantedContact}></SearchBox>
        </div>
        <ContactList
          contactList={visibleContact}
          deletingContact={deleteContact}
          setter={setWantedContact}
        ></ContactList>
      </div>
    </div>
  );
}

export default App;
