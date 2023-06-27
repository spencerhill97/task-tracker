import { useEffect, useRef } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import StorageClass from "../modules/StorageClass";

const EditTaskForm = () => {
  const {
    editTaskForm,
    setEditTaskForm,
    activeTask,
    setActiveTask,
    activeProject,
    setActiveProject,
  } = useGlobalContext();

  const ref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.querySelector(".name-input");
    const description = document.querySelector(".description-input");
    const date = document.querySelector(".date-input");
    const priority = document.querySelector(".priority-input");

    StorageClass.setTask(activeProject.name, activeTask, {
      name: name.value,
      description: description.value,
      dueDate: date.value,
      priority: priority.value,
    });

    setActiveProject(StorageClass.getStorage().getProject(activeProject.name));

    setEditTaskForm(!editTaskForm);
    setActiveTask(null);
  };

  const handleClick = (e) => {
    if (ref.current && !!ref.current.contains(e.target)) return;
    setEditTaskForm(!editTaskForm);
  };

  return (
    <section onClick={handleClick} className="task-form">
      <form ref={ref} onSubmit={handleSubmit} className="task-form__form">
        <fieldset className="task-form__form__fieldset">
          <legend className="task-form__form__fieldset__legend">
            edit task
          </legend>
          <div className="task-form__form__fieldset__input-cont">
            <label
              className="task-form__form__fieldset__input-cont__label"
              htmlFor="name"
            >
              task name
            </label>
            <input
              placeholder="Practice coding..."
              type="name"
              name="name"
              id="name"
              required
              className="name-input"
              defaultValue={activeTask.name}
            />
          </div>
          <div className="task-form__form__fieldset__input-cont">
            <label
              className="task-form__form__fieldset__input-cont__label"
              htmlFor="description"
            >
              description
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              cols="33"
              placeholder="Write your notes here!"
              className="description-input"
              defaultValue={activeTask.description}
            ></textarea>
          </div>
          <div className="task-form__form__fieldset__input-cont">
            <label
              className="task-form__form__fieldset__input-cont__label"
              htmlFor="date"
            >
              due date
            </label>
            <input
              className="date-input"
              type="date"
              name="date"
              id="date"
              defaultValue={activeTask.dueDate}
            />
          </div>
          <div className="task-form__form__fieldset__input-cont">
            <label
              className="task-form__form__fieldset__input-cont__label"
              htmlFor="priority"
            >
              priority
            </label>
            <select
              className="priority-input"
              name="priority"
              id="priority"
              defaultValue={activeTask.priority}
            >
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
          </div>
          {/* <div className="task-form__form__fieldset__input-cont">
            <label
              className="task-form__form__fieldset__input-cont__label"
              htmlFor="project"
            >
              project
            </label>
            <select
              className="project-input"
              name="project"
              id="project"
              defaultValue={activeProject && activeProject.name}
            >
              {Array.from(StorageClass.getProjects()).map((project, index) => {
                return (
                  <option key={index} value={project.name}>
                    {project.name}
                  </option>
                );
              })}
            </select>
          </div> */}
          <div className="task-form__form__fieldset__btn-cont">
            <button type="submit" className="task-form__form__btn btn--green">
              update
            </button>
            <button
              onClick={() => setEditTaskForm(!editTaskForm)}
              type="button"
              className="task-form__form__btn btn--red"
            >
              cancel
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default EditTaskForm;
