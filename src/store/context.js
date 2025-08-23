import { createContext, useContext, useState } from 'react';

export const StoreContext = createContext();

export const useStore = () => {
  return useContext(StoreContext);
};

export const WildTimeGameContextProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState('');
  const [randomPlayer, setRandomPlayer] = useState(false);
  const [order, setOrder] = useState(false);
  const [isEnabledMusic, setIsEnabledMusic] = useState(false);
  const [toggleMusic, setToggleMusic] = useState(false);

  const value = {
    setSelectedColor,
    selectedColor,
    setRandomPlayer,
    randomPlayer,
    order,
    setOrder,
    isEnabledMusic,
    setIsEnabledMusic,
    toggleMusic,
    setToggleMusic,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
