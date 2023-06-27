
import React, { Component } from 'react';
import styles from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleAddContact = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    if (name.trim() === '') {
      return;
    }
    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleAddContact} className={styles.formBlock}>
        <label className={styles.labelBlock}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={styles.input}
          />
        </label>
        <label className={styles.labelBlock}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            placeholder="Enter phone number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses, and plus sign"
            required
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.buttonAdd}>Add Contact</button>
      </form>
    );
  }
}

export default Form;
