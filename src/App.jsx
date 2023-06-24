import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ActiveProject from "./components/ActiveProject";
import { useGlobalContext } from "./context/GlobalContext";
import TaskForm from "./components/TaskForm";

function App() {
  const { taskForm } = useGlobalContext();
  return (
    <main>
      {taskForm && <TaskForm />}
      <Header />
      <Sidebar />
      <ActiveProject />
    </main>
  );
}

export default App;
