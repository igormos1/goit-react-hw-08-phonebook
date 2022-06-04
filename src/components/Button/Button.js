import PropTypes from 'prop-types';
import Buttons from './Button.styled';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '0 auto',
  height: '10px',
  width: '10px',
};

const Button = ({ id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <Buttons type="button" onClick={() => deleteContact(id)}>
      {isLoading ? <ClipLoader css={override} /> : <span>Delete</span>}
    </Buttons>
  );
};

Button.propTypes = {
  id: PropTypes.string,
};

export default Button;
