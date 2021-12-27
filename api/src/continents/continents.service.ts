import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContinentDto } from './dto/create-continent.dto';
import { UpdateContinentDto } from './dto/update.continent.dto';
import { Continent } from './interfaces/continent.interface'; //Test

@Injectable()
export class ContinentsService {

    constructor(@InjectModel('Continent') private continentModel: Model<Continent>) {}; 

    async findContinents(): Promise<Continent[]> {
        const continents = await this.continentModel.find();
        return continents;
    }

    async createContinent(createContinentDto: CreateContinentDto): Promise<Continent> {
        const continent = new this.continentModel(createContinentDto);
        return continent.save();
    }

    async findContinentById(id: string): Promise<Continent> {
        const continent = await this.continentModel.findById(id); 
        return continent;
    }

    async updateContinent(id: string, updateContinentDto: UpdateContinentDto): Promise<Continent> {
        const continent = await this.findContinentById(id);

        if (updateContinentDto.code) {
            continent.code = updateContinentDto.code
        }

        if (updateContinentDto.name) {
            continent.name = updateContinentDto.name
        }

        await continent.save();

        return continent;

    }
    
}
