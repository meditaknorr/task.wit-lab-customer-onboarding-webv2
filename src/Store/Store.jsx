import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { StateContext, DispatchContext } from '../Contexts/AppStoreContexts';
import { whitelist } from '../Locales/whitelist';

/**
 * Language White List Checker
 * >> Determines if the detected language
 * Is available to be used on the app or not
 * Return detected browser language or the default 'eng' language
 * @param browserLanguage
 * @returns string
 */
const whitelistChecker = (browserLanguage) => {
  const result = whitelist.filter((data) => (data === browserLanguage));
  return (result[0] ? browserLanguage : 'en');
};

/**
 *  State Filter
 *  Receives as param, state and return  a new array with only objects
 *  Thos objects IDs must not have its number equal to what came within the payload.
 * @param oldState
 * @param actionId
 * @returns {*}
 */
const stateFilter = (oldState, actionId) => {
  const newState = oldState.filter((dataserver) => dataserver.id !== actionId);
  return newState[0];
};

/**
 * Initial State of the App
 * @type Array Object
 */
const initialState = [
  {
    language: whitelistChecker((window.navigator.language).slice(0, 2)),
    id: 1,
  },
  {
    countryName: 'Mozambique',
    countryCode: 258,
    id: 2,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_STATE':
      return [
        ...state, action.payload,
      ];
    case 'UPDATE_STATE':
      return [
        ...state, action.payload,
      ];
    case 'REMOVE_STATE':
      return [state.filter((dataserver) => dataserver.id !== action.payload.id)];
    case 'CHANGE_APP_LANGUAGE':
      return [
        stateFilter(state, action.payload.id),
        action.payload,
      ];
    case 'CHANGE_APP_COUNTRY':
      return [
        stateFilter(state, action.payload.id),
        action.payload,
      ];
    case 'RESET_STATE':
      return [];
    default:
      throw new Error('Action type must be defined');
  }
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

Store.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Store;
