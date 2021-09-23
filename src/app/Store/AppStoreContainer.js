import React from 'react';
import PropTypes from 'prop-types';
import AppContextProvider from './AppStore';

/**
 * Return a Store Container for the pages/screens
 * @param provider
 * @param component
 * @returns {JSX.Element}
 * @constructor
 */
const AppStoreContainer = ({ component }) => {
  const Component = component;
  return (
    <AppContextProvider>
      <Component />
    </AppContextProvider>
  );
};

AppStoreContainer.propTypes = {
  component: PropTypes.func.isRequired,
};

export default AppStoreContainer;
