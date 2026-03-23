import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>([]);

  constructor() {
    // Initialize with some tasks for testing
    this.tasks = [
      { id: 1, title: 'Task 1', description: 'Description for Task 1', dueDate: '2026-03-25', status: 'Pending', priority: 'Medium' },
      { id: 2, title: 'Task 2', description: 'Description for Task 2', dueDate: '2026-04-01', status: 'In Progress', priority: 'High' },
    ];
    this.tasksSubject.next(this.tasks);
  }

  getTasks() {
    return this.tasksSubject.asObservable();
  }

  getTaskById(id: number) {
    return this.tasks.find(task => task.id === id);
  }

  addTask(task: Task) {
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
  }

  updateTask(id: number, updatedTask: Task) {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = updatedTask;
      this.tasksSubject.next(this.tasks);
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.tasksSubject.next(this.tasks);
  }
}