import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormContainer, FormLabel, FormInput, FormButton } from './contactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.reset();

    const isNameExist = this.props.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (isNameExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    
    this.props.onFormSubmit({ name, number });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  }

  render() {
    const { name, number } = this.state;
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            value={name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>

        <FormLabel>
          Number
          <FormInput
            value={number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <FormButton type='submit' >Add contact</FormButton>
      </FormContainer>
    );
  }
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired))
}

export default ContactForm;
