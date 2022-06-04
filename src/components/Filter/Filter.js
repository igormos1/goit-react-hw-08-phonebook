// import PropTypes from 'prop-types';
import { myFilter } from 'redux/contacts/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onFilter = e => {
    dispatch(myFilter(e.currentTarget.value.trim().toLowerCase()));
  };

  return (
    <div>
      <TextField
        label="Find contacts by name"
        color="secondary"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={onFilter}
      />
    </div>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.string,
//   onChange: PropTypes.func,
// };

export default Filter;
