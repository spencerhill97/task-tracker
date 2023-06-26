import day from "../assets/icons/today.png";
import week from "../assets/icons/week.png";
import month from "../assets/icons/month.png";
import { useState } from "react";
import StorageClass from "../modules/StorageClass";
import Project from "../ui/Project";
import { useGlobalContext } from "../context/GlobalContext";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const { setActiveProject, setActiveUser } = useGlobalContext();

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
    setActiveProject(null);
    setIsDeleted(!isDeleted);
  }

  return (
    <section className="sidebar">
      <article className="sidebar__list">
        <h3 className="sidebar__list__title">Home</h3>
        <ul>
          {StorageClass.getProjects()
            .slice(0, 3)
            .map((project, index) => {
              return (
                <Project
                  key={project.name}
                  project={project}
                  icon={
                    (index === 0 && day) ||
                    (index === 1 && week) ||
                    (index === 2 && month)
                  }
                  handleDelete={handleDelete}
                />
              );
            })}
        </ul>
      </article>
      <article className="sidebar__list user-projects">
        <h3 className="sidebar__list__title">Projects</h3>
        <ul>
          {StorageClass.getProjects()
            .slice(3)
            .map((project) => {
              return (
                <Project
                  key={project.name}
                  project={project}
                  handleDelete={handleDelete}
                />
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
