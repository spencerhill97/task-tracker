export default class Task {
  constructor(name, notes, priority, completed, dueDate) {
    this.name = name;
    this.notes = notes;
    this.priority = priority;
    this.completed = completed;
    this.dueDate = dueDate;
  }

  getTask() {
    return this.name;
  }

  setName(newName) {
    this.name = newName;
  }

  setNotes(newNotes) {
    this.notes = newNotes;
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
