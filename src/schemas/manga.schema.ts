import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MangaDocument = HydratedDocument<Manga>;

@Schema()
export class Manga {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;
}

export const MangaSchema = SchemaFactory.createForClass(Manga);
