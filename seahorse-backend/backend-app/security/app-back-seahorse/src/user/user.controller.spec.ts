import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { GetUserResponse } from './dto/get-user-response.dto';


describe('UserController', () => {
  let userController: UserController;
  
  const mockUserService = {
    create: jest.fn(),
    findOne: jest.fn(),
    logIn: jest.fn()
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
    
        userController = module.get<UserController>(UserController);
      });

      it('should be defined', () => {
        expect(userController).toBeDefined();
      });


    
      it('should find a user by id', async () => {

      const getUserResponseMock: GetUserResponse = new GetUserResponse();
      getUserResponseMock.email = "pepe@mail.com";
      getUserResponseMock.name = "Pepe";
      getUserResponseMock.password = "changeme";
      getUserResponseMock.id = 1;
      
      jest.spyOn(mockUserService, 'findOne').mockReturnValue(getUserResponseMock)

      const getUserResponse: GetUserResponse = await userController.findOne(getUserResponseMock.id)

      expect(mockUserService.findOne).toHaveBeenCalled()
      expect(mockUserService.findOne).toHaveBeenCalledWith(getUserResponseMock.id)
      expect(getUserResponseMock.email).toEqual(getUserResponse.email);
      expect(getUserResponseMock.name).toEqual(getUserResponse.name);
      expect(getUserResponseMock.password).toEqual(getUserResponse.password);
      expect(getUserResponseMock.id).toEqual(getUserResponse.id);
      })
    
});


















