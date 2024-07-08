import { Injectable } from '@nestjs/common';
import { CreateUserResponse } from './create-user-response.dto';
import { CreateUserRequest } from './create-user-request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { GetUserResponse } from '../get-user-usecase/get-user-response.dto';

@Injectable()
export class CreateUserUsecase {

  constructor(  
    @InjectRepository(User) private repository: Repository<User>,
    
  ) {}
  
  async execute(createUserRequest: CreateUserRequest): Promise<CreateUserResponse> {

    const createUserEntity: User = new User();
    
    createUserEntity.email = createUserRequest.email;
    createUserEntity.name = createUserRequest.name;
    createUserEntity.password = createUserRequest.password;

    const userEntityCreated: User = await this.repository.save(createUserEntity);

    const createUserResponse: CreateUserResponse = new CreateUserResponse();

    createUserResponse.email = userEntityCreated.email;
    createUserResponse.name = userEntityCreated.name;
    createUserResponse.password = userEntityCreated.password;
    createUserResponse.id = userEntityCreated.id;

    return createUserResponse;

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
}
