import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

import { useDispatch, useSelector } from "react-redux";
import { addContact } from '../../redux/contactsSlice';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.data);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;

    const includeContact = contacts.find(contact => contact.nameValue.toLowerCase() === form.elements.name.value.toLowerCase());

    if (!includeContact) {
      const nameValue = form.elements.name.value;
      const numberValue = form.elements.number.value;

      if (nameValue.trim() === '' || numberValue.trim() === '') {
        alert(`Please enter the contact's name and number.`)
        return;
      }

      const idValue = nanoid();

      dispatch(addContact({
        nameValue,
        numberValue,
        idValue
      }));
    } else {
      alert(`A contact with the name ${form.elements.name.value} already exists`);
    }
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.formContainer}>
        <label htmlFor="name">Name</label>
        <input
          className={css.formInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, spaces, hyphens, and apostrophes are allowed"
          required
        />
        <label htmlFor="number">Number</label>
        <input
          className={css.formInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Valid Phone Number: Optional '+' Symbol, Digits, Spaces, Hyphens, and Parentheses"
          required
        />
        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </form>
    </div>
  );
}