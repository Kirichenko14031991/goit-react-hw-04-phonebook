import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from 'components/contactItem/contactItem';
import { ListContainer } from './contactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ListContainer>
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDeleteContact={() => onDeleteContact(id)}
      />
    ))}
  </ListContainer>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
