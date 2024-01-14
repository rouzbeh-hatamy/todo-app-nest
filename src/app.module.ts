import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmExModule } from './database/typeorm-ex.module';
import { TasksRepository } from './tasks/tasks.repository';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: 'task-management',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmExModule.forCustomRepository([TasksRepository]),
  ],
})
export class AppModule {}
