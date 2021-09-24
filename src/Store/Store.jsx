import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { StateContext, DispatchContext } from '../Contexts/AppStoreContexts';

/**
 * Initial State / Default Language English :: en
 * @type Array Object
 */
const initialState = [
  {
    language: (window.navigator.language).slice(0, 2),
    id: 1,
  },
];

const stateFilter = (oldState, actionId) => {
  const newState = oldState.filter((dataserver) => dataserver.id !== actionId);
  return newState;
};

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
