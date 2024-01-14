import { Repository } from 'typeorm';
import { Task } from './task.entitiy';
import { CustomRepository } from 'src/database/typeorm-ex.decorator';

@CustomRepository(Task)
export class TasksRepository extends Repository<Task> {
    
}
