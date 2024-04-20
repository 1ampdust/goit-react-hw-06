import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useSelector, useDispatch } from 'react-redux'
import { addContact, deleteContact, changeFilter } from './redux/contactsSlice'

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value))
  };

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  }

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
