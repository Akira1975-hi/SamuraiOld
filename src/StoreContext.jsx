import { createContext } from 'react';

export const Provider = (props) => {
  return <StoreContext.Provider value={props.store}>{props.children}</StoreContext.Provider>;
};

export const StoreContext = createContext(null);
