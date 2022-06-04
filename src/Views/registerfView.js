import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const RegisterView = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h2> Register</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          style={{ display: 'block' }}
          margin="normal"
          color="secondary"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          required
          onChange={handleChange}
        />
        <TextField
          style={{ display: 'block' }}
          margin="normal"
          color="secondary"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={handleChange}
        />
        <TextField
          style={{ display: 'block' }}
          margin="normal"
          color="secondary"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          required
          onChange={handleChange}
        />
        <Button variant="contained" color="secondary" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterView;
