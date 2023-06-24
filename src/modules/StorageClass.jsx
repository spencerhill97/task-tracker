import ProjectClass from "./ProjectClass";
import ToDoListClass from "./ToDoListClass";
import TaskClass from "./TaskClass";

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

    todoList
      .getProjects()
      .forEach((project) =>
        project.setTasks(
          project.getTasks().map((task) => Object.assign(new TaskClass(), task))
        )
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
    const todoList = StorageClass.getProjects();
    return todoList.find((currProject) => currProject.name === project.name);
  }

  static addTask(project, task) {
    const todoList = StorageClass.getStorage();
    todoList.getProject(project).addTask(task);
    StorageClass.saveStorage(todoList);
  }

  static deleteTask(project, task) {
    const todoList = StorageClass.getStorage();
    todoList.getProject(project).deleteTask(task);
    StorageClass.saveStorage(todoList);
  }
}
