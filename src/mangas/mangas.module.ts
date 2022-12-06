import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Manga, MangaSchema } from 'src/schemas/manga.schema';
import { MangasController } from './mangas.controller';
import { MangasService } from './mangas.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Manga.name, schema: MangaSchema }]),
  ],
  controllers: [MangasController],
  providers: [MangasService],
})
export class MangasModule {}
