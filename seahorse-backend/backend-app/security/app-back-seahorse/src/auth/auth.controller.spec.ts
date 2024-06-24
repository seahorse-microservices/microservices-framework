import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { SignInRequest } from './dto/sign-in-request.dto';
import { SignInResponse } from './dto/sign-in-response.dto';
import { UserService } from '../user/user.service';
import { CreateUserResponse } from '../user/dto/create-user-response.dto';
import { CreateUserRequest } from '../user/dto/create-user-request.dto';
import { LogInRequest } from './dto/log-in-request.dto';
import { GetUserResponse } from '../user/dto/get-user-response.dto';
import { GetUserRequest } from '../user/dto/login-user-request.dto';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { LogInResponse } from './dto/log-in-response.dto';


describe('AuthController', () => {
  let authController: AuthController;
  const mockUserService = {
    create: jest.fn(),
    findByEmailAndPassword: jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        JwtModule.register({
          global: true,
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '60s' },
        }),
      ],
      controllers: [AuthController],
      providers: [{ provide: UserService, useValue: mockUserService }],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    });

    it('should be defined', () => {
    expect(authController).toBeDefined();
    });


    it('should do a signIn', async () => {
      
      const mockCreateUserResponse: CreateUserResponse = new CreateUserResponse();
      
      mockCreateUserResponse.name = "Pepe";
      mockCreateUserResponse.id = 1
      mockCreateUserResponse.email = "pepe@email.com";
      mockCreateUserResponse.password = "changeme";

      jest.spyOn(mockUserService, 'create').mockReturnValue(mockCreateUserResponse);
      


    
      const signInRequest: SignInRequest = new SignInRequest();
      signInRequest.email = "pepe@email.com";
      signInRequest.name = "Pepe";
      signInRequest.organization = "Zara";
      signInRequest.password = "changeme";

      const signInResponse: SignInResponse = await authController.signIn(signInRequest);



      const mockCreateUserRequest: CreateUserRequest = new CreateUserRequest();
      mockCreateUserRequest.name = "Pepe";
      mockCreateUserRequest.email = "pepe@email.com";
      mockCreateUserRequest.password = "changeme";

      expect(mockUserService.create).toHaveBeenCalledWith(mockCreateUserRequest)
      expect(signInResponse.name).toEqual(signInRequest.name);
      expect(signInResponse.email).toEqual(signInRequest.email);
    });



    it('should do a logIn', async () => {
      
      const logInRequest: LogInRequest = new LogInRequest();
      logInRequest.email = "pepe@email.com";
      logInRequest.password = "changeme";
  
      const getUserResponse : GetUserResponse = new GetUserResponse()
      getUserResponse.email = "pepe@email.com";
      getUserResponse.name = "Pepe";
      getUserResponse.id = 1
      getUserResponse.password = "changeme";


     
  
      jest.spyOn(mockUserService, 'findByEmailAndPassword').mockResolvedValue(getUserResponse);
      
      const logInResponse: LogInResponse = await authController.logIn(logInRequest);
      
      const getUserRequest: GetUserRequest = new GetUserRequest();
        getUserRequest.email = "pepe@email.com"
        getUserRequest.password = "changeme"
      
      
      expect(mockUserService.findByEmailAndPassword).toHaveBeenCalledWith(getUserRequest);
      expect(logInResponse.email).toEqual(logInRequest.email);
      expect(logInResponse.id).toBeDefined();
      expect(logInResponse.accessToken).toBeDefined();
      
      
  
    });
  
});
