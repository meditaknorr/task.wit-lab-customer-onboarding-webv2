import React, {createContext, useState} from 'react';

const AppContext = createContext();

const AppContextProvider = (props) => {
  const [phone, setPhone] = useState(0);

  return (
    <AppContext.Provider value={{phone, setPhone}}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;
export {AppContext};

/*
* Estrutura imutavel, Troca pode gerar erros
* Dentro do AppContextProvider deve se criar as variaveis de estado
* E retornar dentro do provider como value, as variaveis, funções que queremos que estejam
* Abertos a serem acessador.
* */


