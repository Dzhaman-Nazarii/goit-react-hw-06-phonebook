import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.idValue !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// export const addContact = value => {
//   return {
//     type: 'contacts/addContact',
//     payload: value,
//   };
// };

// export const deleteContact = idValue => {
//   return {
//     type: 'contacts/deleteContact',
//     payload: idValue,
//   };
// };
