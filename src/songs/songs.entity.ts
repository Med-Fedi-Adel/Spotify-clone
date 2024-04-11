import { Artist } from 'src/artists/artist.entity';
import { PlayList } from 'src/playlists/playlists.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('songs')
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  /* @Column('varchar', { array: true })
  artists: string[];*/

  @Column('date')
  releaseDate: Date;

  @Column('time')
  duration: Date;

  @Column('text')
  lyrics: string;

  @ManyToMany(() => Artist, (artist: Artist) => artist.songs, { cascade: true })
  @JoinTable({ name: 'songs_artists' })
  artists: Artist[];

  @ManyToOne(() => PlayList, (playlist: PlayList) => playlist.songs)
  playList: PlayList;
}
