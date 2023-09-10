import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { MainHeader, Header, MainWrap } from './App.styled';
import ContactList from './contactList/contactList';
import Filter from './contactFilter/contactFilter';
import ContactForm from './contactForm/contactForm';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contactsJSON = localStorage.getItem('contacts');
    return contactsJSON
      ? JSON.parse(contactsJSON)
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
    setFilter('');
  };

  const formSubmitHandler = data => {
    const newContact = { ...data, id: nanoid() };
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <MainWrap>
      <MainHeader>Phonebook</MainHeader>
      <ContactForm onFormSubmit={formSubmitHandler} contacts={contacts} />
      <Header>Contacts</Header>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </MainWrap>
  );
};

export default App;
