import { Routes, Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import { RegisterView } from 'views/registerfView';
// import { LogInView } from 'views/logInView';
// import { ContactsView } from 'views/contactsView';
import Container from 'App.style';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authOperations from 'redux/auth/auth-operations'
// import PrivateRoute from './components/Routes/PrivateRoute'
import PrivateRoute from './Routes/PrivateRoute'
import PublicRoute from './Routes/PublicRoute';
import AppBar from 'components/AppBar/AppBar';
// import { HomeView } from 'views/homeView';

const LogInView = lazy(()=> import('views/logInView'));
const RegisterView = lazy(()=> import('views/registerfView'));
const ContactsView = lazy(()=> import('views/contactsView'));
const HomeView = lazy(()=> import('views/homeView'));
const NotFoundView = lazy(()=> import('views/notFoundView'))

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Suspense fallback={<p>Loading...</p>}>
       <Routes>
         <Route path='/' element = {<AppBar/>}>
           <Route index element = {<HomeView/>}/>
            <Route path='register' element ={ <PublicRoute>{<RegisterView/>}</PublicRoute>}/>
           <Route path='login' element ={<PublicRoute>{<LogInView/>}</PublicRoute>}/>
              <Route path ='contacts' element={<PrivateRoute>{<ContactsView/>}</PrivateRoute>}/>
         </Route>
         <Route path="*" element={<NotFoundView/>} /> 
       </Routes>
       </Suspense>
    </Container>
  );
};