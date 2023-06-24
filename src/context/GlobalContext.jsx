import { useContext, createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [activeProject, setActiveProject] = useState(null);
  const [taskForm, setTaskForm] = useState(false);

  const value = { setActiveProject, activeProject, taskForm, setTaskForm };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default AppContext;
