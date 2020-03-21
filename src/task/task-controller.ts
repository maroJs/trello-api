import { Task } from './task-model';

// exemple
const allTasks = [
  {name: 'task 1', description: 'description 1 here'},
  {name: 'task 2', description: 'description 2 here'},
];

export class TaskController {
  get(): Array<Task> {
    return allTasks;
  }
  post(task: Task): void {
    allTasks.push(task);
  }
}
