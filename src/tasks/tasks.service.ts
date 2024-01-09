import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { randomUUID } from 'crypto';
import { CreateTaskDTO } from './DTO/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  createTask(createTaskDTO: CreateTaskDTO): Task[] {
    const { title, description } = createTaskDTO;
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

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  deleteTaskById(id: string): Task[] {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return this.tasks;
  }

  updateTaskStatusById(id: string, status: TaskStatus): Task {
    this.tasks = this.tasks.map((task: Task) =>
      task.id === id ? { ...task, status } : task,
    );
    return this.tasks.find((task) => task.id === id);
  }
}
