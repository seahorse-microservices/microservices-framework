import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserRequest } from './dto/create-user-request.dto';
import { CreateUserResponse } from './dto/create-user-response.dto';
import { GetUserResponse } from './dto/get-user-response.dto';

describe('UserService', () => {
  let service: UserService;
  let userRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
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
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  it('should create a new user', async () => {
    const createUserRequest: CreateUserRequest = new CreateUserRequest();
      createUserRequest.email = "pepe@mail.com";
      createUserRequest.name = "Pepe";
      createUserRequest.password = "changme";

      const createUserResponse: CreateUserResponse = await service.create(createUserRequest);
      
      expect(createUserRequest.email).toEqual(createUserResponse.email);
      expect(createUserRequest.name).toEqual(createUserResponse.name);
      expect(createUserRequest.password).toEqual(createUserResponse.password);
  });



  it('should find a User by Id', async () => {

    const createUserRequest: CreateUserRequest = new CreateUserRequest();
    createUserRequest.email = "pepe@mail.com";
    createUserRequest.name = "Pepe";
    createUserRequest.password = "changme";

    const createUserResponse: CreateUserResponse = await service.create(createUserRequest);

    const getUserResponse: GetUserResponse = await service.findOne(createUserResponse.id);
    expect(getUserResponse.email).toEqual(createUserResponse.email);
    expect(getUserResponse.name).toEqual(createUserResponse.name);
    expect(getUserResponse.password).toEqual(createUserResponse.password);
  })






});
