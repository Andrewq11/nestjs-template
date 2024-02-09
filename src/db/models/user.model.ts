import { Entity, Column } from 'typeorm';
import { Base } from '../base';

@Entity()
export class User extends Base {
  @Column({ unique: true })
  email: string;
}
