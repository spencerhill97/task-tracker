import ProjectClass from "./ProjectClass";
import ToDoListClass from "./ToDoListClass";

export default class StorageClass {
  static saveStorage(data) {
    localStorage.setItem("taskTracker", JSON.stringify(data));
  }

  static getStorage() {
    const todoList = Object.assign(
      new ToDoListClass(),
      JSON.parse(localStorage.getItem("taskTracker"))
    );

    todoList.setProjects(
      todoList
        .getProjects()
        .map((project) => Object.assign(new ProjectClass(), project))
    );

    return todoList;
  }

  static addProject(project) {
    const todoList = StorageClass.getStorage();
    todoList.addProject(project);
    StorageClass.saveStorage(todoList);
  }

  static removeProject(project) {
    const todoList = StorageClass.getStorage();
    todoList.deleteProject(project);
    StorageClass.saveStorage(todoList);
  }

  static getProjects() {
    const todoList = StorageClass.getStorage();
    return todoList.projects;
  }

  static getProject(project) {
    const todoList = StorageClass.getStorage();
    return todoList.find((currProject) => currProject.name === project.name);
  }
}
