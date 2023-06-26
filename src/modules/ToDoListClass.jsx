import ProjectClass from "./ProjectClass";

export default class ToDoListClass {
  constructor() {
    this.projects = [];
    this.projects.push(new ProjectClass("today"));
    this.projects.push(new ProjectClass("this week"));
    this.projects.push(new ProjectClass("this month"));
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

  deleteProject(project) {
    this.projects = this.projects.filter(
      (currProj) => currProj.name !== project.name
    );
  }

  addTask(project, task) {
    this.getProject(project).addTask(task);
  }
}
