import { useRef, useState } from "react";
import StorageClass from "../modules/StorageClass";
import { useGlobalContext } from "../context/GlobalContext";

const Task = ({ task }) => {
  const [toggle, setToggle] = useState(false);
  const {
    activeProject,
    setActiveProject,
    setEditTaskForm,
    editTaskForm,
    setActiveTask,
  } = useGlobalContext();

  const checkRef = useRef(null);
  const deleteRef = useRef(null);
  const editRef = useRef(null);

  const handleToggle = (e) => {
    if (checkRef.current && !!checkRef.current.contains(e.target)) {
      return;
    } else if (deleteRef.current && !!deleteRef.current.contains(e.target)) {
      return;
    } else if (editRef.current && !!editRef.current.contains(e.target)) {
      return;
    }

    setToggle(!toggle);
  };

  const handleDelete = (task) => {
    StorageClass.deleteTask(activeProject, task);
    setActiveProject(StorageClass.getStorage().getProject(activeProject.name));
  };

  return (
    <div
      onClick={handleToggle}
      className={`active-project__tasks__task ${
        (task.priority === "low" && "task--low") ||
        (task.priority === "medium" && "task--medium") ||
        (task.priority === "high" && "task--high")
      }`}
    >
      <div
        className={`task__container ${
          task.description ? "cursor-pointer" : ""
        }`}
      >
        <div className="task__container__details first">
          <form ref={checkRef} className="task__container__details__form">
            <input type="checkbox" id="completed" name="completed" />
          </form>
          <h4 className="task__container__details__name">{task.name}</h4>
        </div>
        <div className="task__container__details">
          {/* <p
                className={`task__container__details__priority ${
                  (task.priority === "low" && "priority--low") ||
                  (task.priority === "medium" && "priority--medium") ||
                  (task.priority === "high" && "priority--high")
                }`}
              >
                {task.priority}
              </p> */}
          <p className="task__container__details__date">{task.dueDate}</p>
          <div className="task__container__details__functionality">
            <button
              onClick={() => {
                setActiveTask(task);
                setEditTaskForm(!editTaskForm);
              }}
              ref={editRef}
              className="task__container__details__functionality__btn--edit"
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button
              onClick={() => handleDelete(task)}
              ref={deleteRef}
              className="task__container__details__functionality__btn--delete"
            >
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
      {task.description && toggle && (
        <div className="task__container--description">{task.description}</div>
      )}
    </div>
  );
};

export default Task;
