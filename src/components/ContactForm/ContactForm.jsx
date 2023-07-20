import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

import { useDispatch } from "react-redux";
import { addContact } from 'redux/contactsSlice';

export default function ContactForm() {

  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    dispatch(addContact({
      nameValue: form.elements.name.value,
      numberValue: form.elements.number.value,
      idValue: nanoid()
    }));
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.formContainer}>
        <label>Name</label>
        {/* htmlFor */}
        <input
          className={css.formInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, spaces, hyphens, and apostrophes are allowed"
          required
        />
        <label>Number</label>
        {/* htmlFor */}
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