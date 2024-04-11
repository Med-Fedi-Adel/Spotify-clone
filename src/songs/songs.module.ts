import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { connection } from 'src/common/constants/connection';
import { DevConfigService } from 'src/common/providers/DevCConfigService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './songs.entity';
import { Artist } from 'src/artists/artist.entity';

// the module will imports,exports controllers and providers

const mockSongsService = {
  findAll() {
    return [{ id: 1, title: 'Fedi singing' }];
  },
};

@Module({
  imports: [TypeOrmModule.forFeature([Song, Artist])],
  controllers: [SongsController],
  providers: [
    SongsService,
    /* {
      provide: SongsService,
      //use it as class when it is injected
      useClass: SongsService,
    },*/
    /* {
      provide: SongsService,
      useValue: mockSongsService,
    },*/
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ],
})
export class SongsModule {}
