import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
  })
  make: string;

  @Column({
    type: 'varchar',
    length: 50,
  })
  model: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  features: string;

  @Column({
    type: 'varchar',
    length: 20,
    unique: true,
  })
  vin: string;

  @Column({
    type: 'int',
  })
  price: number;

  @Column({
    type: 'varchar',
    length: 80,
  })
  location: string;
}
