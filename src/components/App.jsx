import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/operations';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';

import { selectIsLoading, selectError } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        textAlign: 'center',
        flexDirection: 'column',
        marginTop: '40px',
        marginBottom: '40px',
      }}
    >
      <h1
        style={{
          fontSize: 25,
          fontWeight: 500,
          marginTop: '10px',
        }}
      >
        Phonebook
      </h1>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <h2
        style={{
          fontSize: 30,
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ContactList />
    </div>
  );
};
