import day from "../assets/icons/today.png";
import week from "../assets/icons/week.png";
import month from "../assets/icons/month.png";
import { useEffect, useState } from "react";
import StorageClass from "../modules/StorageClass";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const input = e.target.children[0];
    StorageClass.addProject(input.value);
    input.value = "";
    setActive(!isActive);
  }

  function handleDelete(e, project) {
    setIsDeleted(!isDeleted);
    e.preventDefault();
    StorageClass.removeProject(project);
    setIsDeleted(!isDeleted);
  }

  return (
    <section className="sidebar">
      <article className="sidebar__list">
        <h3 className="sidebar__list__title">Home</h3>
        <ul>
          <li className="sidebar__list__project">
            <img src={day} width={30} />
            Today
          </li>
          <li className="sidebar__list__project">
            <img src={week} width={30} />
            This Week
          </li>
          <li className="sidebar__list__project">
            <img src={month} width={30} />
            This Month
          </li>
        </ul>
      </article>
      <article className="sidebar__list user-projects">
        <h3 className="sidebar__list__title">Projects</h3>
        <ul>
          {StorageClass.getProjects()
            .slice(3)
            .map((project) => {
              return (
                <div
                  key={project.name}
                  className="sidebar__list__project group relative"
                >
                  <h2>{project.name}</h2>
                  <button
                    onClick={(e) => handleDelete(e, project)}
                    className="project__btn btn--icon absolute right-1 hidden"
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                </div>
              );
            })}
        </ul>
      </article>
      <div className="sidebar__createProject">
        {isActive ? (
          <form className="createProject__form" onSubmit={handleSubmit}>
            <input
              className="createProject__form__input"
              type="text"
              name="new-project"
              id="new-project"
            />
            <button
              type="submit"
              className="createProject__form__input__btn btn--green "
            >
              add
            </button>
            <button
              type="button"
              className="createProject__form__input__btn btn--red"
              onClick={() => setActive(!isActive)}
            >
              cancel
            </button>
          </form>
        ) : (
          <button
            className="group createProject__btn btn--green"
            onClick={() => setActive(!isActive)}
          >
            <i className="createProject__btn__icon fa-solid fa-plus"></i> add
            project
          </button>
        )}
      </div>
    </section>
  );
};

export default Sidebar;
