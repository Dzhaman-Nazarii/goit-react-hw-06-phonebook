import React from 'react';
import css from './ContactList.module.css'
import { useSelector,useDispatch } from "react-redux";
import { deleteContact } from '../../redux/contactsSlice'

export default function ContactList() {
  const dispatch = useDispatch()

  const contacts = useSelector(state => state.contacts);

  const handleDelete = (idValue) => { dispatch(deleteContact(idValue))};
  
  return (
      <ul>
        {contacts.map(({nameValue,numberValue, idValue}) => (
          <li key={idValue}>
            {nameValue}: {numberValue}
            <button type="button" className={css.buttonList} onClick={()=>handleDelete(idValue)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
  )
}