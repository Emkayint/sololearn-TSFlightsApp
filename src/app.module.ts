import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightsService } from './flights/flights.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FlightsService],
})
export class AppModule {}
