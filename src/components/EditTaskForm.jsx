import { useRef, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import TaskClass from "../modules/TaskClass";
import StorageClass from "../modules/StorageClass";

const EditTaskForm = () => {
  const { editTaskFormForm, setEditTaskForm } = useGlobalContext();

  const ref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
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
              defaultValue="spencer hill"
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
            ></textarea>
          </div>
          <div className="task-form__form__fieldset__input-cont">
            <label
              className="task-form__form__fieldset__input-cont__label"
              htmlFor="date"
            >
              due date
            </label>
            <input className="date-input" type="date" name="date" id="date" />
          </div>
          <div className="task-form__form__fieldset__input-cont">
            <label
              className="task-form__form__fieldset__input-cont__label"
              htmlFor="priority"
            >
              priority
            </label>
            <select className="priority-input" name="priority" id="priority">
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
          </div>
          <div className="task-form__form__fieldset__input-cont">
            <label
              className="task-form__form__fieldset__input-cont__label"
              htmlFor="project"
            >
              project
            </label>
            <select className="project-input" name="project" id="project">
              {Array.from(StorageClass.getProjects()).map((project, index) => {
                return (
                  <option key={index} value={project.name}>
                    {project.name}
                  </option>
                );
              })}
            </select>
          </div>
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
