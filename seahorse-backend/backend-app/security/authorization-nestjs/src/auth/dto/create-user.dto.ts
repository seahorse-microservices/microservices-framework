import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

  @ApiProperty()
  @AutoMap()
  id: number;
  
  @ApiProperty()
  @AutoMap()
  @IsString({ 'message': 'Escriba un nombre válido.' })
  @Length(8, 20, { 'message': 'Nombre de usuario entre 8 y 20 caracteres' })
  username: string;
  
  @ApiProperty()
  @AutoMap()
  @IsEmail()
  email: string
  
  @ApiProperty()
  isAdmin: boolean;
  
  @ApiProperty()
  @Length(8, 20, { 'message': 'Contraseña entre 8 y 20 caracteres' })
  password: string;
}