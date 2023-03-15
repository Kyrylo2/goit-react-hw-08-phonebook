import { Stack, List } from '@mui/material';

import ContactsListItem from 'components/ContactsListItem';

const style = {
  boxShadow: 1,
  borderRadius: 2,
  border: '1px solid lightgray',
  p: 2,
  minWidth: 350,
  maxWidth: 500,
  alignItems: 'center',
  padding: 0,
};

const ContactsList = ({ contacts }) => {
  return (
    <>
      <Stack direction="column" justifyContent="flex-start" alignItems="center">
        <List sx={style} aria-label="contacts">
          {contacts.map(({ name, number, id }) => {
            return (
              <ContactsListItem name={name} id={id} phone={number} key={id} />
            );
          })}
        </List>
      </Stack>
    </>
  );
};

export default ContactsList;
