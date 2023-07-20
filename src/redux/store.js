import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  contacts: [],
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    case 'contacts/deleteContact': {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.idValue !== action.payload
        ),
      };
    }
    case 'filter/searchFilter':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

// import { combineReducers, createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';

// const initialState = {
//   contacts: [],
//   filter: '',
// };

// const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact': {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     }
//     case 'contacts/deleteContact': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.idValue !== action.payload
//         ),
//       };
//     }
//     default:
//       return state;
//   }
// };

// const filtersInitialState = '';

// const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case 'filter/searchFilter':
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filtersReducer,
// });

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);
