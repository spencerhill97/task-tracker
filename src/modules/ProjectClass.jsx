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

  getTask(task) {
    if (typeof task === "string") {
      return this.tasks.find((currTask) => currTask.name === task);
    }

    return this.tasks.find((currTask) => currTask.name === task.name);
  }

  deleteTask(task) {
    this.tasks = this.tasks.filter((currTask) => task.name !== currTask.name);
  }

  getTasks() {
    return this.tasks;
  }

  setTasks(currentTasks) {
    this.tasks = currentTasks;
  }
}
