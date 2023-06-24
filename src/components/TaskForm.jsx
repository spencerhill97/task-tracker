import { useRef } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import TaskClass from "../modules/TaskClass";
import Storage from "../modules/StorageClass";

const TaskForm = () => {
  const { taskForm, setTaskForm, activeProject } = useGlobalContext();
  const ref = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.querySelector(".name-input");
    const description = document.querySelector(".description-input");
    const date = document.querySelector(".date-input");
    const priority = document.querySelector(".priority-input");

    const newTask = new TaskClass(
      name.value,
      description.value,
      date.value,
      priority.value
    );

    Storage.addTask(activeProject, Object.assign(newTask));

    activeProject.addTask(Object.assign(newTask));

    console.log(activeProject.getTasks());
  };

  const handleClick = (e) => {
    if (ref.current && !!ref.current.contains(e.target)) return;
    setTaskForm(!taskForm);
  };

  return (
    <section onClick={handleClick} className="task-form">
      <form ref={ref} onSubmit={handleSubmit} className="task-form__form">
        <fieldset className="task-form__form__fieldset">
          <legend className="task-form__form__fieldset__legend">
            add task
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
          <div className="task-form__form__fieldset__btn-cont">
            <button type="submit" className="task-form__form__btn btn--green">
              submit
            </button>
            <button
              onClick={() => setTaskForm(!taskForm)}
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

export default TaskForm;
