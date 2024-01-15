import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.model';
import { CreateTaskDTO } from './DTO/create-task.dto';
import { GetTaskFilterDto } from './DTO/get-task-filter.dto';

@Injectable()
export class TasksService {
  // createTask(createTaskDTO: CreateTaskDTO): Task[] {
  //   const { title, description } = createTaskDTO;
  //   const task: Task = {
  //     id: randomUUID(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return this.tasks;
  // }
  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  // getTasksWithFilters(filterDto: GetTaskFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (
  //         task.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
  //         task.description
  //           .toLocaleLowerCase()
  //           .includes(search.toLocaleLowerCase())
  //       ) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }
  //   return tasks;
  // }
  // getTaskById(id: string): Task {
  //   const task = this.tasks.find((task) => task.id === id);
  //   if (!task) throw new NotFoundException(`task with id ${id} not found`);
  //   return task;
  // }
  // deleteTaskById(id: string): Task[] {
  //   const foundTask = this.getTaskById(id);
  //   this.tasks = this.tasks.filter((task) => task.id !== foundTask.id);
  //   return this.tasks;
  // }
  // updateTaskStatusById(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
}
