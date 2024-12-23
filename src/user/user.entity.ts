import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 100 })
  email: string;

  @Column({ type: 'time' })
  dayOfBirth: Date;

  @CreateDateColumn()
  createdDay: Date;
}
