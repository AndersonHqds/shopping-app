import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RepositoryModule } from './infrastructure/repository.module';
import { UseCaseModule } from './infrastructure/usecases.module';
import { DatabaseModule } from './infrastructure/database.module';

@Module({
  imports: [DatabaseModule, RepositoryModule, UseCaseModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
