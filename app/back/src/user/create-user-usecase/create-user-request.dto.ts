import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length, } from 'class-validator';


export class CreateUserRequest {
    @IsString({ message: 'Should be a valid username' })
    @Length(3, 18)
    @ApiProperty()
    name: string;
    @IsEmail({}, { message: 'Should be a valid email' })
    @ApiProperty()
    email: string;
    @IsString({ message: 'Should be a valid password' })
    @Length(6, 60)
    @ApiProperty()
    password: string;
}
