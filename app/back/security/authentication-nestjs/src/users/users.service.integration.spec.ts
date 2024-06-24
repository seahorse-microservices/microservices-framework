import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';


describe('UsersService', () => {
  let service: UsersService;
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne',  () => {
    it('should be return all users', async() =>{
      const user = 
        {
          userId: 1,
          username: 'john',
          password: 'changeme',
        };

      const userSearched = await service.findOne('john')
      expect(userSearched).toEqual(user);
      expect(userSearched.username).toBe(user.username);

    })
  })
});
