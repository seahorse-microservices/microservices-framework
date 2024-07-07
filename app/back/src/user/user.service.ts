import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserResponse } from './dto/create-user-response.dto';
import { CreateUserRequest } from './dto/create-user-request.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { GetUserResponse } from './dto/get-user-response.dto';

@Injectable()
export class UserService {

  constructor(  
    @InjectRepository(User) private repository: Repository<User>,
    
  ) {}
  
  async create(createUserRequest: CreateUserRequest): Promise<CreateUserResponse> {

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


  async findOne(id: number): Promise<GetUserResponse> {
    
    const userFinded: User = await this.repository.findOneBy({ id: id })

    const getUserResponse: GetUserResponse = new GetUserResponse();
    getUserResponse.email = userFinded.email;
    getUserResponse.id = userFinded.id;
    getUserResponse.name = userFinded.name;
    getUserResponse.password = userFinded.password;    
    return getUserResponse;
  }



  findAll() {
    return `This action returns all user`;
  }



  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
