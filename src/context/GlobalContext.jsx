import { useContext, createContext, useEffect, useState } from "react";
import StorageClass from "../modules/StorageClass";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [activeProject, setActiveProject] = useState(null);

  const value = {};

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default AppContext;
