export default class TaskClass {
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  getTask() {
    return this.name;
  }

  setName(newName) {
    this.name = newName;
  }

  setTask(newName, newDescription, newDueDate, newPriority, newCompleted) {
    this.name = newName;
    this.description = newDescription;
    this.dueDate = newDueDate;
    this.priority = newPriority;
    this.completed = newCompleted;
  }

  setDescription(newDescription) {
    this.description = newDescription;
  }

  setPriority(newPriority) {
    this.priority = newPriority;
  }

  setCompleted(newCompleted) {
    this.completed = newCompleted;
  }

  toggleComplete() {
    this.completed = !this.completed;
  }

  setDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }
}
