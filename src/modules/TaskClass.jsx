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

  setDescription(newDescription) {
    this.description = newDescription;
  }

  setPriority(newPriority) {
    this.priority = newPriority;
  }

  setCompleted(newCompleted) {
    this.completed = newCompleted;
  }

  setDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }
}
