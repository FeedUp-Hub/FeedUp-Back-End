import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikesEntity } from 'src/db/entities/likes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LikesEntity])],
  controllers: [LikesController],
  providers: [LikesService],
})
export class LikesModule {}
