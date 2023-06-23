export default class ProjectClass {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    return (this.name = newName);
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getTask(name) {
    return this.tasks.filter((currTask) => currTask.name === name)[0];
  }

  deleteTask(task) {
    this.tasks = this.tasks.filter((currTask) => task.name !== currTask);
  }

  getTasks() {
    return this.tasks;
  }

  setTasks() {
    this.tasks = tasks;
  }
}
