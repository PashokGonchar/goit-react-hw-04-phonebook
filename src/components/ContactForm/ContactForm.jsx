import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Input, Label, SubmitButton } from './ContactForm.styled';
import PropTypes from 'prop-types';

class ContactFormPage extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputName = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleInputNumber = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmitForm}>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ' \-\u0400-\u04FF]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleInputName}
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
          onChange={this.handleInputNumber}
        />
        <SubmitButton type="submit">Add Contacts</SubmitButton>
      </Form>
    );
  }
}

export default ContactFormPage;

ContactFormPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
