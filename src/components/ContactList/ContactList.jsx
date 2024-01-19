import { useDispatch, useSelector } from 'react-redux';
import {
  ListOfContact,
  ContactItem,
  Text,
  Spinner,
} from './ContactList.styled';
import {
  selectIsLoading,
  selectError,
  getVisibleContacts,
} from 'components/redux/selectors';
import { deleteContact } from 'components/redux/thunk';

export const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <>
      {isLoading && <Spinner />}
      {error && <Text>{error}</Text>}
      <ListOfContact>
        {contacts.map(contact => (
          <ContactItem key={contact.id}>
            {contact.name}: {contact.number}
            <button
              type="button"
              onClick={() => {
                handleDelete(contact.id);
              }}
            >
              Delete
            </button>
          </ContactItem>
        ))}
      </ListOfContact>
    </>
  );
};
