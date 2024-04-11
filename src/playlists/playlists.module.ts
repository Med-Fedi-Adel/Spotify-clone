import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayList } from './playlists.entity';
import { Song } from 'src/songs/songs.entity';
import { User } from 'src/users/user.entity';
import { PlayListsService } from './playlists.service';
import { PlayListsController } from './playlists.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PlayList, Song, User])],
  controllers: [PlayListsController],
  providers: [PlayListsService],
})
export class PlayListsModule {}
