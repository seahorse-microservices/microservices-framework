import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserUsecase } from './create-user.usecase';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user.schema';
import { Repository } from 'typeorm';
import { CreateUserRequest } from './create-user-request.dto';
import { CreateUserResponse } from './create-user-response.dto';
import { GetUserResponse } from '../get-user-usecase/get-user-response.dto';

describe('UserService', () => {
  let service: CreateUserUsecase;
  let userRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateUserUsecase],
      imports: [
        TypeOrmModule.forFeature([User]),
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '1234',
          database: 'seahorse',
          entities: ["dist/**/*.entity.js"],
          autoLoadEntities: true,
          synchronize: true,
        })
      ]
    }).compile();

    userRepository = module.get('UserRepository');
    service = module.get<CreateUserUsecase>(CreateUserUsecase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  it('should create a new user', async () => {
    const createUserRequest: CreateUserRequest = new CreateUserRequest();
      createUserRequest.email = "pepe@mail.com";
      createUserRequest.name = "Pepe";
      createUserRequest.password = "changme";

      const createUserResponse: CreateUserResponse = await service.execute(createUserRequest);
      
      expect(createUserRequest.email).toEqual(createUserResponse.email);
      expect(createUserRequest.name).toEqual(createUserResponse.name);
      expect(createUserRequest.password).toEqual(createUserResponse.password);
  });



  it('should find a User by Id', async () => {

    const createUserRequest: CreateUserRequest = new CreateUserRequest();
    createUserRequest.email = "pepe@mail.com";
    createUserRequest.name = "Pepe";
    createUserRequest.password = "changme";

    const createUserResponse: CreateUserResponse = await service.execute(createUserRequest);

    const getUserResponse: GetUserResponse = await service.findOne(createUserResponse.id);
    expect(getUserResponse.email).toEqual(createUserResponse.email);
    expect(getUserResponse.name).toEqual(createUserResponse.name);
    expect(getUserResponse.password).toEqual(createUserResponse.password);
  })






});
