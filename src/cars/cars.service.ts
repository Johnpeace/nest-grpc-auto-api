import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Car } from './car.entity';
import { CarDto } from './car.dto';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private CarsRepository: Repository<Car>,
  ) {}

  async create(carDto: CarDto): Promise<Car> {
    console.log('*******', carDto);
    return await this.CarsRepository.create(carDto);
  }

  findAll(): Promise<Car[]> {
    return this.CarsRepository.find();
  }

  findOne(id: string): Promise<Car> {
    return this.CarsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.CarsRepository.delete(id);
  }
}
