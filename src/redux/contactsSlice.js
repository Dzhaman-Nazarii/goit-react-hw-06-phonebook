export const addContact = value => {
  return {
    type: 'contacts/addContact',
    payload: value,
  };
};

export const deleteContact = idValue => {
  return {
    type: 'contacts/deleteContact',
    payload: idValue,
  };
};
