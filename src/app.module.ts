import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MangasModule } from './mangas/mangas.module';

@Module({
  imports: [
    MangasModule,
    MongooseModule.forRoot(
      'mongodb+srv://coderhouse:%405PmAPWakmq%40GHx@coderhouse.q5mhnd3.mongodb.net/coderhouse-project?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
