import { useRef } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const Project = (project) => {
  const { setActiveProject } = useGlobalContext();
  const ref = useRef(null);

  const handleClick = (e) => {
    // will not change active class if delete icon is clicked
    if (ref.current && ref.current.contains(e.target)) return;
    setActiveProject(project.project);
  };

  return (
    <div
      onClick={handleClick}
      className="sidebar__list__project group relative"
    >
      {project.icon ? <img src={project.icon} width="30px" alt="icon" /> : ""}
      <h2>{project.project.name}</h2>
      {project.project.name !== "all tasks" &&
        project.project.name !== "this week" &&
        project.project.name !== "today" && (
          <button
            ref={ref}
            onClick={(e) => project.handleDelete(e, project.project)}
            className="project__btn btn--icon absolute right-1 hidden"
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        )}
    </div>
  );
};

export default Project;
