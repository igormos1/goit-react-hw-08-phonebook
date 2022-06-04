import { Li, Ul, P } from './ContactList.styled';
import Button from 'components/Button/Button';
import ClipLoader from 'react-spinners/ClipLoader';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';

const ContactList = () => {
  const { data, isLoading } = useGetContactsQuery();

  const filter = useSelector(state => state.filter);

  const visible = data?.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      {isLoading && <ClipLoader />}
      {data && (
        <Ul>
          {visible.map(({ id, name, number }) => (
            <Li key={id}>
              <P>{name}:</P> <p>{number}</p>
              <Button id={id} />
            </Li>
          ))}
        </Ul>
      )}
      {visible?.length === 0 && <p>no contacts</p>}
    </div>
  );
};

export default ContactList;
