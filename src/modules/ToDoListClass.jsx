import ProjectClass from "./ProjectClass";
import isDateToday from "../utilities/dateIsToday";

export default class ToDoListClass {
  constructor() {
    this.projects = [];
    this.projects.push(new ProjectClass("all tasks"));
    this.projects.push(new ProjectClass("today"));
    this.projects.push(new ProjectClass("this week"));
  }

  setProjects(currProjects) {
    this.projects = currProjects;
  }

  addProject(name) {
    if (this.containsProject(name) || name === "") return;
    this.projects.push(new ProjectClass(name));
  }

  containsProject(name) {
    return this.projects.find((currProj) => currProj.name === name);
  }

  getProjects() {
    return this.projects;
  }

  getProject(project) {
    if (typeof project === "string") {
      return this.projects.find((currProject) => currProject.name === project);
    }

    return this.projects.find(
      (currProject) => currProject.name === project.name
    );
  }

  getTask(project, task) {
    if (typeof task === "string") {
      return this.getProject(project).getTask(task);
    }

    return this.getProject(project).getTask(task.name);
  }

  deleteProject(project) {
    this.projects = this.projects.filter(
      (currProj) => currProj.name !== project.name
    );
  }

  addTask(project, task) {
    this.getProject(project).addTask(task);
    this.getProject("all tasks").addTask(task);

    console.log(task.dueDate);
  }

  setTask(project, task, { ...obj }) {
    this.getProject(project)
      .getTask(task)
      .setTask(
        obj.name,
        obj.description,
        obj.dueDate,
        obj.priority,
        obj.completed
      );
  }

  addTodaysTasks() {}
}
