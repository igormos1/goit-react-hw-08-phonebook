import { useState } from 'react';
import { Container } from './ContactsForm.styled';
// import { nanoid } from 'nanoid';
import {
  useCreatContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsSlice';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [createContact] = useCreatContactMutation();
  const { data } = useGetContactsQuery();

  const contacts = data;

  const nameChange = e => {
    setName(e.currentTarget.value);
  };

  const numberChange = e => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      // id: nanoid(),
      name,
      number,
    };
    createContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <TextField
          color="secondary"
          size="small"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={nameChange}
        />
        <p>Number</p>
        <TextField
          color="secondary"
          size="small"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={numberChange}
        />

        <Button
          style={{ margin: '20px auto', display: 'block' }}
          variant="contained"
          color="secondary"
          type="submit"
        >
          Add Contact
        </Button>
      </form>
    </Container>
  );
}
export default ContactForm;
