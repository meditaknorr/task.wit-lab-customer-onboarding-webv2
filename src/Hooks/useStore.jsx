import { useContext } from 'react';
import { StoreStateContext, StoreDispatchContext } from '../Store/StoreContexts';

export const storeGetter = () => useContext(StoreStateContext);
export const storeSetter = () => useContext(StoreDispatchContext);
