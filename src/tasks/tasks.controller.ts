import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './DTO/create-task.dto';
import { GetTaskFilterDto } from './DTO/get-task-filter.dto';
import { UpdateTaskStatusDto } from './DTO/update-task-status.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getTasks(@Query() filterDto: GetTaskFilterDto): Task[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTasksWithFilters(filterDto);
  //   } else {
  //     return this.tasksService.getAllTasks();
  //   }
  // }

  // @Post()
  // createTask(@Body() createTaskDTO: CreateTaskDTO): Task[] {
  //   return this.tasksService.createTask(createTaskDTO);
  // }

  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Task {
  //   return this.tasksService.getTaskById(id);
  // }

  // @Delete('/:id')
  // deleteTaskById(@Param('id') id: string): Task[] {
  //   return this.tasksService.deleteTaskById(id);
  // }

  // @Patch('/:id/status')
  // updateTaskStatusById(
  //   @Param('id') id: string,
  //   @Body() UpdateTaskStatusDto: UpdateTaskStatusDto,
  // ): Task {
  //   const { status } = UpdateTaskStatusDto;
  //   return this.tasksService.updateTaskStatusById(id, status);
  // }
}
