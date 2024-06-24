import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserRequest } from './dto/create-user-request.dto';
import { CreateUserResponse } from './dto/create-user-response.dto';
import { GetUserResponse } from './dto/get-user-response.dto';
import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import {  GetUserRequest } from './dto/login-user-request.dto';


@Injectable()
export class UserService {
  
  
    constructor(  
      @InjectRepository(User) private repository: Repository<User>,
      
    ) {}

  async create(createUserDto: CreateUserRequest) : Promise<CreateUserResponse> {

    const createUserEntity: User = new User();
    
    createUserEntity.email = createUserDto.email;
    createUserEntity.name = createUserDto.name;
    createUserEntity.password = createUserDto.password;

    const userEntityCreated: User = await this.repository.save(createUserEntity);

    
    const createUserResponse: CreateUserResponse = new CreateUserResponse();

    createUserResponse.email = userEntityCreated.email;
    createUserResponse.name = userEntityCreated.name;
    createUserResponse.password = userEntityCreated.password;
    createUserResponse.id = userEntityCreated.id;

    return createUserResponse;
  }


  async findByEmailAndPassword(getUserRequest: GetUserRequest): Promise<GetUserResponse> {
    
    const userEntity = await this.repository.findOne({ where: {password: getUserRequest.password, email: getUserRequest.email } });

    if (!userEntity) {throw new Error('invalid Data');}

    const getUserResponse: GetUserResponse = new GetUserResponse();
    getUserResponse.id = userEntity.id;
    getUserResponse.email = userEntity.email;
    getUserResponse.name = userEntity.name;
    getUserResponse.password = userEntity.password;

    return getUserResponse;
  }

  async findOne(id: number): Promise<GetUserResponse> {
    
    const userFinded: User = await this.repository.findOneBy({ id: id })

    const getUserResponse: GetUserResponse = new GetUserResponse();
    getUserResponse.email = userFinded.email;
    getUserResponse.id = userFinded.id;
    getUserResponse.name = userFinded.name;
    getUserResponse.password = userFinded.password;    
    return getUserResponse;
  }
}


  
  
  
  // findAll() {
  //   return `This action returns all user`;
  // }

 

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }





//import { Injectable, UnauthorizedException } from '@nestjs/common';
//import { JwtService } from '@nestjs/jwt';
  //private jwtService: JwtService
  // async logIn(
  //   username: string,
  //   pass: string,
  // ): Promise<{ access_token: string }> {
  //   const user = await this.repository.findOneBy()
  //   findOne(username);
  //   if (user?.password !== pass) {
  //     throw new UnauthorizedException();
  //   }
  //   const payload = { sub: user.userId, username: user.username };
  //   return {
  //     access_token: await this.jwtService.signAsync(payload),
  //   };
  // }