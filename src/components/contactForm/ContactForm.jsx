import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const handlerSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name: e.target.elements.name.value,
      phone: e.target.elements.phone.value,
    };

    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() === newContact.name.toLowerCase() ||
          contact.phone === newContact.phone
      )
    ) {
      return alert(
        `${newContact.name} or ${newContact.phone} is already in contacts`
      );
    }

    dispatch(addContact(newContact));

    e.target.elements.name.value = '';
    e.target.elements.phone.value = '';
  };

  return (
    <>
      <form onSubmit={handlerSubmit}>
        <label>
          <p className={css.text}>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <p className={css.text}>Number</p>
          <input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};
