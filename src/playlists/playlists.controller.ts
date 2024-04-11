import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayListDTO } from './dto/create-playlist-dto';
import { PlayList } from './playlists.entity';
import { PlayListsService } from './playlists.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('playlists')
@ApiTags('playlists')
export class PlayListsController {
  constructor(private playListService: PlayListsService) {}

  @Post()
  create(@Body() playListDTO: CreatePlayListDTO): Promise<PlayList> {
    return this.playListService.create(playListDTO);
  }
}
