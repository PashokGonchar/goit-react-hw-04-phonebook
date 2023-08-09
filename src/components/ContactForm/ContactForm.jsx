import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Input, Label, SubmitButton } from './ContactForm.styled';
import PropTypes from 'prop-types';

const ContactFormPage = (props) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputName = e => {
     setName(e.target.value);
    };
  const handleInputNumber = e => {
     setNumber(e.target.value);
    };

    const handleSubmitForm = e => {
      e.preventDefault();
      
      props.onSubmit(name, number);
      setName('');
      setNumber('');
    };

  return (
    <Form onSubmit={handleSubmitForm}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ' \-\u0400-\u04FF]+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleInputName}
        id={nanoid()}
      />
      <Label htmlFor="number">Number</Label>
      <Input
        type="tel"
        name="number"
        pattern="^[+]?[0-9\\.\\-\\s]{1,15}$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleInputNumber}
      />
      <SubmitButton type="submit">Add Contacts</SubmitButton>
    </Form>
  );
}

export default ContactFormPage;

ContactFormPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
