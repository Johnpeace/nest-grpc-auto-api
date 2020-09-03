import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { CarDto } from './car.dto';
import { CarsService } from './cars.service';
import { Car } from './car.entity';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get()
  async findAll(): Promise<Car[]> {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Car> {
    return this.carsService.findOne(id);
  }

  @Post()
  create(@Body() carDto: CarDto): Promise<Car> {
    return this.carsService.create(carDto);
  }

  // @Put(':id')
  // update(@Body() updateCarDto: CarDto, @Param('id') id): Promise<Car> {
  //   return this.carsService.update(id, updateCarDto);
  // }

  @Delete(':id')
  remove(@Param('id') id): Promise<void> {
    return this.carsService.remove(id);
  }
}
