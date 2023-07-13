import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ActiveProject from "./components/ActiveProject";
import { useGlobalContext } from "./context/GlobalContext";
import AddTaskForm from "./components/AddTaskForm";
import EditTaskForm from "./components/EditTaskForm";

function App() {
  const { addTaskForm, editTaskForm } = useGlobalContext();
  return (
    <main>
      {addTaskForm && <AddTaskForm />}
      {editTaskForm && <EditTaskForm />}
      <Header />
      <section className="main-content">
        <Sidebar />
        <ActiveProject />
      </section>
    </main>
  );
}

export default App;
