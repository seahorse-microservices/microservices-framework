import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CreateUserRequest } from './dto/create-user-request.dto';
import { CreateUserResponse } from './dto/create-user-response.dto';
import { GetUserResponse } from './dto/get-user-response.dto';

describe('UserController', () => {
  let controller: UserController;
  
  const mockUserService = {
    create: jest.fn(),
    findOne: jest.fn()
  }


  beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          controllers: [UserController],
          providers: [
            {
              provide: UserService,
              useValue: mockUserService,
            },
          ],
        }).compile();
    
        controller = module.get<UserController>(UserController);
      });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });


    describe('create usert', () => {
    it('should create a new user', async () => {
      
      const createUserRequest: CreateUserRequest = new CreateUserRequest();
      createUserRequest.email = "pepe@mail.com";
      createUserRequest.name = "Pepe";
      createUserRequest.password = "changeme";
   
      jest.spyOn(mockUserService, 'create').mockReturnValue(createUserRequest);

      const createUserResponse: CreateUserResponse = await controller.create(createUserRequest);

      expect(mockUserService.create).toHaveBeenCalled();
      expect(mockUserService.create).toHaveBeenCalledWith(createUserRequest)
      expect(createUserRequest.email).toEqual(createUserResponse.email);
      expect(createUserRequest.name).toEqual(createUserResponse.name);
      expect(createUserRequest.password).toEqual(createUserResponse.password);
    })
  })

    describe('findOne', () => {
    it('should find a user by id', async () => {

      const getUserResponseMock: GetUserResponse = new GetUserResponse();
      getUserResponseMock.email = "pepe@mail.com";
      getUserResponseMock.name = "Pepe";
      getUserResponseMock.password = "changeme";
      getUserResponseMock.id = 1;
      
      jest.spyOn(mockUserService, 'findOne').mockReturnValue(getUserResponseMock)

      const getUserResponse: GetUserResponse = await controller.findOne(getUserResponseMock.id)


      expect(mockUserService.findOne).toHaveBeenCalled()
      expect(mockUserService.findOne).toHaveBeenCalledWith(getUserResponseMock.id)
      expect(getUserResponseMock.email).toEqual(getUserResponse.email);
      expect(getUserResponseMock.name).toEqual(getUserResponse.name);
      expect(getUserResponseMock.password).toEqual(getUserResponse.password);
      expect(getUserResponseMock.id).toEqual(getUserResponse.id);
    })
  })

});