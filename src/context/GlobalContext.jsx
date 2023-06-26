import { useContext, createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeTask, setActiveTask] = useState(null);
  const [addTaskForm, setAddTaskForm] = useState(false);
  const [editTaskForm, setEditTaskForm] = useState(false);

  const value = {
    setActiveProject,
    activeProject,
    addTaskForm,
    setAddTaskForm,
    editTaskForm,
    setEditTaskForm,
    setActiveTask,
    activeTask,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default AppContext;
