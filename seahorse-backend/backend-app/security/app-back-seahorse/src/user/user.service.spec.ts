import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserRequest } from './dto/create-user-request.dto';
import { CreateUserResponse } from './dto/create-user-response.dto';
import { GetUserResponse } from './dto/get-user-response.dto';
import { GetUserRequest } from './dto/login-user-request.dto';


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

  afterEach(async () => {
        await userRepository.query('DELETE FROM user')
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


  it('should find a User by email and password', async () => {
        
      
       
        const createUserRequest: CreateUserRequest = new CreateUserRequest();
        createUserRequest.email = "pepe@email.com";
        createUserRequest.name = "Pepe";
        createUserRequest.password = "changme";

        await service.create(createUserRequest);



        const getUserRequest: GetUserRequest = new GetUserRequest();
        getUserRequest.email = "pepe@email.com"
        getUserRequest.password = "changme"
        
        const getUserResponse :GetUserResponse = await service.findByEmailAndPassword(getUserRequest);

        expect(getUserRequest.email).toEqual(getUserResponse.email);
        expect(getUserRequest.password).toEqual(getUserResponse.password);
  });

  it('should find a User by Id', async () => {

      const createUserRequest: CreateUserRequest = new CreateUserRequest();
      createUserRequest.email = "pepe@email.com";
      createUserRequest.name = "Pepe";
      createUserRequest.password = "changeme";

      const createUserResponse: CreateUserResponse = await service.create(createUserRequest);

      const getUserResponse: GetUserResponse = await service.findOne(createUserResponse.id);
      
      
      expect(getUserResponse.email).toEqual(createUserRequest.email);
      expect(getUserResponse.name).toEqual(createUserRequest.name);
      expect(getUserResponse.password).toEqual(createUserRequest.password);
  
  });

  

});




 



