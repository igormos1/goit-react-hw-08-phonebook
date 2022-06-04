import ContactForm from 'components/Form/ContactsForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

const ContactsView = () => {
  return (
    <>
      <h2>PhoneBook</h2>
      <ContactForm />
      <h3>Contacts</h3>
      <Filter />
      <ContactList />
    </>
  );
};
export default ContactsView;
