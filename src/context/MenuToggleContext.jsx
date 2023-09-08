import { useState, createContext } from "react";

export const MenuToggleContext = createContext();

export function MenuToggleProvider({ children }) {
  const [toggle, setToggle] = useState(false);
  const menuToggle = () => setToggle((toggle) => !toggle);
  return (
    <MenuToggleContext.Provider value={{ toggle, menuToggle }}>
      {children}
    </MenuToggleContext.Provider>
  );
}
