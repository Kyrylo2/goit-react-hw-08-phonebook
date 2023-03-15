import React, { useMemo } from 'react';

import { useSelector } from 'react-redux';

import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';
import ContactsForm from 'components/ContactForm';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetContactsQuery } from 'redux/contactsApi';

const getFilteredContacts = (contacts, filterValue) =>
  contacts.filter(el => el.name.toLowerCase().includes(filterValue));

const Contacts = React.memo(() => {
  const { data: contacts = [], error, isLoading } = useGetContactsQuery();

  const filterValue = useSelector(state => state.filter);

  const contactsArr = useMemo(
    () => getFilteredContacts(contacts, filterValue),
    [contacts, filterValue]
  );

  return (
    <div>
      <ContactsForm />
      {isLoading && !error && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      )}

      {!isLoading && error && <div>Error</div>}
      {!isLoading &&
        (contactsArr.length > 1 || filterValue !== '' ? <Filter /> : null)}

      {!isLoading && contactsArr.length > 0 && (
        <ContactsList contacts={contactsArr} />
      )}
    </div>
  );
});

export default Contacts;
