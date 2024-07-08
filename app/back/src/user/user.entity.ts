import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNumber, IsString, MinLength } from 'class-validator';

@Entity()
export class User {


    @PrimaryGeneratedColumn()
    @IsNumber({}, { message: 'Should be a valid id.' })
    id: number;

    @Column()
    @IsString({ message: 'Should be a valid name.' })
    @MinLength(4, { message: 'Minimum 4 characters' })
    name: string;

    @Column()
    @IsString({ message: 'Should be a valid name.' })
    @MinLength(4, { message: 'Minimum 4 characters' })
    email: string;

    @Column()
    @IsString({ message: 'Should be a valid password.' })
    password: string;

  
    getGmail(): string {

        return this.email;
        
      }

}