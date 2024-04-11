import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayList } from './playlists.entity';
import { Repository } from 'typeorm';
import { Song } from 'src/songs/songs.entity';
import { User } from 'src/users/user.entity';
import { CreatePlayListDTO } from './dto/create-playlist-dto';

@Injectable()
export class PlayListsService {
  constructor(
    @InjectRepository(PlayList)
    private playListRepo: Repository<PlayList>,
    @InjectRepository(Song)
    private songRepo: Repository<Song>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(playListDTO: CreatePlayListDTO): Promise<PlayList> {
    const playList = new PlayList();
    playList.name = playListDTO.name;

    const songs = await this.songRepo.findByIds(playListDTO.songs);
    playList.songs = songs;

    const user = await this.userRepo.findOneBy({ id: playListDTO.user });
    playList.user = user;

    return this.playListRepo.save(playList);
  }
}
