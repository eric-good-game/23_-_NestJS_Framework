/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import CreateMangaDto from 'src/dto/create-manga.dto';
// import { Manga } from 'src/interfaces/manga/manga.interface';
import { Manga, MangaDocument } from 'src/schemas/manga.schema';

@Injectable()
export class MangasService {
    
    constructor(@InjectModel(Manga.name) private mangaModel: Model<MangaDocument>) {}

    async create(createMangaDto: CreateMangaDto): Promise<Manga> {
        try {
            const createdManga = new this.mangaModel(createMangaDto);
            return createdManga.save();
        } catch (err) {
            console.log(err);
        }
    }
  
    async findAll(): Promise<Manga[]> {
        try{
            return await this.mangaModel.find().exec();
        } catch (err) {
            throw err;
        }
    }

    async getById(id: string): Promise<Manga> {
        try {
            return await this.mangaModel.findById(id).exec();   
        } catch (err) {
            throw err;
        }
    }
    async update(id: string, createMangaDto: CreateMangaDto): Promise<Manga> {
        try {
            return await this.mangaModel.findByIdAndUpdate(id, createMangaDto, {new: true});
        } catch (err) {
            throw err
        }
    }
    async delete(id: string): Promise<Manga> {
        try {
            return await this.mangaModel.findByIdAndDelete(id);
        } catch (err) {
            throw err
        }
    }
}
