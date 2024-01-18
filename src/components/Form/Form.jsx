import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Form, Input, Label, Button } from './Form.styled';
import { getVisibleContacts } from 'components/redux/selectors';
import { addContact } from 'components/redux/thunk';

export const FormAddContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name: event.currentTarget.elements.name.value,
      number: event.currentTarget.elements.number.value,
    };

    const isInContacts = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      toast.error(`${contact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(contact));
    event.currentTarget.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nanoid()}>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={nanoid()}
          required
        />
      </Label>
      <Label htmlFor={nanoid()}>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={nanoid()}
          required
        />
      </Label>
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};
