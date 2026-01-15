import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Task } from './tasks/entities/task.entity';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nest_user',
      password: '1234567', // The password you created in the PSQL step
      database: 'nestjs_db',
      entities: [User, Task],
      synchronize: true, // Auto-creates tables (use only for dev!)
    }),
    UsersModule,
    TasksModule,
  ],
  controllers: [AppController], // <--- Make sure this is here
  providers: [AppService],
})
export class AppModule {}
