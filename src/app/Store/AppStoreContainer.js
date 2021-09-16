import React from 'react';

const AppStoreContainer = ({provider, component}) => {
  const Provider = provider;
  const Component = component;
  return (
    <Provider>
      <Component/>
    </Provider>
  )
}
