import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
  key: 'root',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;

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
