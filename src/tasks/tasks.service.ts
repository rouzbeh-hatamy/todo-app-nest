import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { randomUUID } from 'crypto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  createTask(title: string, description: string): Task[] {
    const task: Task = {
      id: randomUUID(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return this.tasks;
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }
}
