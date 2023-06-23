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

  deleteProject(project) {
    this.projects = this.projects.filter(
      (currProj) => currProj.name !== project.name
    );
  }
}