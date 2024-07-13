import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserResponse } from './create-user-response.dto';
import { CreateUserRequest } from './create-user-request.dto';
import { User, UserDocument } from '../user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CreateUserUsecase {

  constructor(  
    @InjectModel(User.name)
    private model: Model<UserDocument>,
    
  ) {}
  
  async execute(createUserRequest: CreateUserRequest): Promise<CreateUserResponse> {

    
    
    const user: User = this.setUser(createUserRequest);

    if (await this.model.findOne({ email: createUserRequest.email })) {
      console.log('Email already exists')
      throw new ConflictException('This email already exists')
    }
    
    const userCreated = await this.model.create(user);

    const createUserResponse: CreateUserResponse = new CreateUserResponse();

    createUserResponse.email = userCreated.email;
    createUserResponse.name = userCreated.name;
    createUserResponse.password = userCreated.password;
    createUserResponse.id = userCreated._id;

    return createUserResponse;

  }


  private setUser(createUserRequest: CreateUserRequest): User {
    const user: User = new User();
    user.email = createUserRequest.email;
    user.name = createUserRequest.name;
    user.password = createUserRequest.password;
    return user;
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
