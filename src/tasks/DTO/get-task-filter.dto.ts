import { TaskStatus } from '../task.model';

export class CreateTaskDTO {
  status?: TaskStatus;
  search?: string;
}
