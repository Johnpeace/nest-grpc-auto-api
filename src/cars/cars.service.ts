import { Injectable, Inject, NotFoundException } from '@nestjs/common';

import { Car } from './car.entity';
import { CarDto } from './dto/car.dto';
import { User } from '../users/user.entity';
import { CAR_REPOSITORY } from '../core/constants';

@Injectable()
export class CarsService {
  constructor(
    @Inject(CAR_REPOSITORY) private readonly carRepository: typeof Car,
  ) {}

  async create(car: CarDto, userId): Promise<Car> {
    return await this.carRepository.create<Car>({ ...car, userId });
  }

  async findAll(): Promise<Car[]> {
    return await this.carRepository.findAll<Car>({
      include: [{ model: User, attributes: { exclude: ['password'] } }],
    });
  }

  async findOne(id): Promise<Car> {
    return await this.carRepository.findOne({
      where: { id },
      include: [{ model: User, attributes: { exclude: ['password'] } }],
    });
  }

  async update(id, data, userId) {
    const [numberOfAffectedRows, updatedCar] = await this.carRepository.update(
      { ...data },
      { where: { id, userId }, returning: true },
    );
    return { numberOfAffectedRows, updatedCar };
  }

  async buy(balance, id) {
    const carData = await this.carRepository.findOne({ where: { id } });

    if (balance > carData['dataValues'].price) {
      /**
       * Deduct balance and send a confirmation mail
       */
    }

    return carData['dataValues'];
  }
}
