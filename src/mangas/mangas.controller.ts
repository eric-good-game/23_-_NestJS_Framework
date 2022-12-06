/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, } from '@nestjs/common';
import CreateMangaDto from 'src/dto/create-manga.dto';
import { Manga } from 'src/interfaces/manga/manga.interface';
import { MangasService } from './mangas.service';

@Controller('mangas')
export class MangasController {
    constructor(private readonly mangasService: MangasService) {}

    @Post()
    async create(@Body() createMangaDto: CreateMangaDto) {
        try {
            return this.mangasService.create(createMangaDto);
        } catch (err) {
            console.log(err);   
        }
    }
    @Put(':id')
    async update(@Param() params:{id:string}, @Body() createMangaDto: CreateMangaDto) {
        try {
            console.log(params.id);
            console.log(createMangaDto);
            this.mangasService.update(params.id, createMangaDto);
        } catch (err) {
            console.log(err);   
        }
    }
    @Delete(':id')
    async delete(@Param() params:{id:string}): Promise<Manga> {
        try {
            console.log(params.id);
            return this.mangasService.delete(params.id);
        } catch (err) {
            console.log(err);
        }
    }

    @Get()
    async findAll(): Promise<Manga[]> {
        try {
            return this.mangasService.findAll();
        } catch (err) {
            console.log(err);
        }
    }
    @Get(':id')
    async getById(@Param() params:{id:string}): Promise<Manga> {        
        try {
            const {id} = params;
            return this.mangasService.getById(id);   
        } catch (err) {
            console.log(err);
            
        }
    }


}
