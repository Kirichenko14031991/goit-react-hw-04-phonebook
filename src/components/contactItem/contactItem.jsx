import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ContactName, ContactNumber, DeleteButton } from './contactItem.styled';

const ContactItem = ({ name, number, onDeleteContact }) => (
  <ListItem>
    <ContactName>{name}:</ContactName>
    <ContactNumber>{number}</ContactNumber>
    <DeleteButton onClick={onDeleteContact}>Delete</DeleteButton>
  </ListItem>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
