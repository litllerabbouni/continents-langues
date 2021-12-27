import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Continent, ContinentSchema } from './schemas/continents.chema';
import { ContinentsController } from './continents.controller';
import { ContinentsService } from './continents.service';

@Module({
    imports : [
        MongooseModule.forFeature([{name: Continent.name, schema: ContinentSchema}])
    ],
    controllers: [ContinentsController],
    providers: [ContinentsService]
})
export class ContinentsModule {}
