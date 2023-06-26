import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Task from "../ui/Task";

const ActiveProject = () => {
  const { activeProject, addTaskForm, setAddTaskForm } = useGlobalContext();

  return (
    <section className="active-project">
      <div className="active-project__header">
        <h2 className="active-project__header__title">
          {activeProject ? activeProject.name : "Active Project"}
        </h2>
        <p className="active__project__header__task-count">
          <span className="task-count">
            {activeProject === null ? "0" : activeProject.tasks.length}
          </span>{" "}
          {activeProject && activeProject.tasks.length === 1 ? "task" : "tasks"}
        </p>
        <button
          onClick={() => setAddTaskForm(!addTaskForm)}
          className="active__project__header__add-btn group btn--green"
        >
          <i className="active__project__header__add-btn__icon fa-solid fa-plus"></i>
        </button>
      </div>
      <article className="active-project__tasks">
        {activeProject &&
          activeProject.getTasks().map((task) => {
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
