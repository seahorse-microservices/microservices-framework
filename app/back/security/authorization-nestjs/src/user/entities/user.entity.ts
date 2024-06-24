import { AutoMap } from "@automapper/classes";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity extends BaseEntity{

  @AutoMap()
  @PrimaryGeneratedColumn()
  id: number;

  @AutoMap()
  @Column({ type: 'varchar', length: 50 })
  username: string;

  @AutoMap()
  @Column({ type: 'varchar', length: 80 })
  email: string;

  @Column()
  isAdmin: boolean;
  
  @Column({ type: 'varchar', length: 255 })
  password: string;

}