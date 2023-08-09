import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactFormPage from './ContactForm/ContactForm';
import ContactListPage from './ContactsList/ContactsList';
import Filter from './ContactFilters/ContactFilters';
import { HeaderDiv, HeaderH1, HeaderH2 } from './AppNew.styled';
import Notiflix from 'notiflix';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contactsList = JSON.parse(localStorage.getItem('contacts'));
    return contactsList || [];
  });
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts])


  const handleSubmit = (name, number) => {
    if (contacts.some(contact => contact.name === name)) {
      Notiflix.Notify.info(`${name} вже існує!`);
      return;
    }

    if (contacts.some(contact => contact.number === number)) {
      Notiflix.Notify.info(`${number} вже є у цьому списку контактів!`);
      return;
    }

    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    setContacts(contacts => [...contacts, newContact]);
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = getFilteredContacts();
  const isHiddenFilterList = contacts.length === 0;

  return (
    <HeaderDiv>
      <HeaderH1>Phonebook</HeaderH1>
      <ContactFormPage onSubmit={handleSubmit} />
      <HeaderH2>Contacts</HeaderH2>
      {!isHiddenFilterList && (
        <Filter value={filter} onChange={handleFilterChange} />
      )}
      <ContactListPage
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </HeaderDiv>
  );
};