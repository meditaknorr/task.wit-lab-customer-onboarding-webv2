import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { StoreStateContext, StoreDispatchContext } from './StoreContexts';
import { reducer, initialState } from './StoreReducer';
import { AppConfigs } from '../Configs/AppConfigs';

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreDispatchContext.Provider value={dispatch}>
      <StoreStateContext.Provider value={state}>
        {AppConfigs.debuggingMode && console.log(state)}
        {children}
      </StoreStateContext.Provider>
    </StoreDispatchContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default StoreProvider;
