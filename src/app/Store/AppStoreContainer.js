import React from 'react';

/**
 * Retorna um componente que serve de ponte de ligação leve entre o store e os demais componentes
 * @param provider
 * @param component
 * @returns {JSX.Element}
 * @constructor
 */
const AppStoreContainer = ({provider, component}) => {
  const Provider = provider;
  const Component = component;
  return (
    <Provider>
      <Component/>
    </Provider>
  )
}

export default AppStoreContainer;