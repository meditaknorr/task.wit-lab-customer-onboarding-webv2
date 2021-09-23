import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { StateContext, DispatchContext } from '../Contexts/AppStoreContexts';

/**
 * Initial State / Default Language English :: en
 * @type Array Object
 */
const initialState = [
  {
    language: 'en',
    id: 1,
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
