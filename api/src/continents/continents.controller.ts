import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Put, Res, ValidationPipe } from '@nestjs/common';
import { ContinentsService } from './continents.service';
import { CreateContinentDto } from './dto/create-continent.dto';
import { UpdateContinentDto } from './dto/update.continent.dto';
import { Continent } from './interfaces/continent.interface';


@Controller('continents')
export class ContinentsController {
    constructor(private continentService: ContinentsService) {};

    @Get('/')
    async findContinents(@Res() res) {
        const continents = await this.continentService.findContinents();
        return res.status(HttpStatus.OK).json(continents);
    }

    @Post()
    async createContinent(@Res() res, @Body() createContinentDto: CreateContinentDto) {
        const continent = await this.continentService.createContinent(createContinentDto);
        return res.status(HttpStatus.OK).json({
            message: 'Product Successfully Created',
            continent
        });
    }


    @Get(':id')
    async findContinentById(@Res() res, @Param('id') id) {
        const continent = await this.continentService.findContinentById(id);
        if (!continent) throw new NotFoundException('Continent does not found!');
        return res.status(HttpStatus.OK).json(continent);
    }


    @Put(':id')
    updateContinent(
        @Param('id') id: string,
        @Body(ValidationPipe) updateContinentDto: UpdateContinentDto
    ) {
        return this.continentService.updateContinent(id, updateContinentDto);
    }
    
}
