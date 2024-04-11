import { Song } from 'src/songs/songs.entity';
import { User } from 'src/users/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('playlists')
export class PlayList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Song, (song: Song) => song.playList)
  songs: Song[];

  @ManyToOne(() => User, (user: User) => user.playlists)
  user: User;
}
