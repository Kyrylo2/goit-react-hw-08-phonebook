import {
  colors,
  IconButton,
  ListItemText,
  ListItem,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FaceIcon from '@mui/icons-material/Face';

import { useDeleteContactMutation } from 'redux/contactsApi';

const ContactsListItem = ({ name, id, phone }) => {
  const [deleteContact] = useDeleteContactMutation();

  const handleDelete = async id => {
    await deleteContact(id);
  };

  return (
    <>
      <ListItem
        key={id}
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => handleDelete(id)}
            color="error"
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar size="small" sx={{ bgcolor: colors.green[500] }}>
            <FaceIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} secondary={phone} />
      </ListItem>
    </>
  );
};

export default ContactsListItem;
