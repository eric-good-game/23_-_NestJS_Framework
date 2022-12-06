/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
class CreateMangaDto {
    @ApiProperty()
    readonly title: string;
    @ApiProperty()
    readonly author: number;
}

export default CreateMangaDto;