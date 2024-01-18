import { FormAddContact } from './Form/Form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Section } from './Section/Section';
import Filter from './Filter/Filter';
import { Container, Wrapper } from './App.styled';
import { ContactsList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { getContacts } from './redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Section title="Phonebook">
        <FormAddContact />
      </Section>
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <Filter />
        ) : (
          <Wrapper>Your phonebook is empty. Add first contact!</Wrapper>
        )}
        {contacts.length > 0 && <ContactsList />}
      </Section>
      <ToastContainer />
    </Container>
  );
};
