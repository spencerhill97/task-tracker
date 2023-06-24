import { useGlobalContext } from "../context/GlobalContext";
import Task from "../ui/Task";

const ActiveProject = () => {
  const { activeProject, taskForm, setTaskForm } = useGlobalContext();

  const handleClick = () => {
    setTaskForm(!taskForm);
  };

  return (
    <section className="active-project">
      <div className="active-project__header">
        <h2 className="active-project__header__title">
          {activeProject ? activeProject.name : "Active Project"}
        </h2>
        <p className="active__project__header__task-count">
          <span className="task-count">1</span> task
        </p>
        <button
          onClick={handleClick}
          className="active__project__header__add-btn group btn--green"
        >
          <i className="active__project__header__add-btn__icon fa-solid fa-plus"></i>
        </button>
      </div>
      <article className="active-project__tasks">
        {activeProject &&
          activeProject.getTasks().map((task, index) => {
            return (
              <Task
                key={`${task.name ? task.name : ""}${Math.random()}`}
                task={task}
              />
            );
          })}
      </article>
    </section>
  );
};

export default ActiveProject;
