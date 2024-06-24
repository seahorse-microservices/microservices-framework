import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from '../services/user.service';
import { UserEntity } from '../entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { CaslModule } from '../../casl/casl.module';
import { SaveOptions, RemoveOptions } from 'typeorm';
// npm run test:watch
describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
      ],
      imports: [
        TypeOrmModule.forFeature([UserEntity]),
        AutomapperModule.forRoot({
          strategyInitializer: classes()
        }),
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password:'1234',
          database: 'seahorse',
          entities: ["dist/**/*.entity.js"],
          autoLoadEntities: true,
          synchronize: true,
        }),
        CaslModule
      ]
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  describe('findUserById', () => {
    it('should return a user by id', async () => {

      const id = 1;
      const userMocked: UserEntity = {
        id: id,
        username: 'Pepe',
        email: 'pepe@gmail.com',
        password: "1234",
        isAdmin: false,
        hasId: function (): boolean {
          throw new Error('Function not implemented.');
        },
        save: function (options?: SaveOptions): Promise<UserEntity> {
          throw new Error('Function not implemented.');
        },
        remove: function (options?: RemoveOptions): Promise<UserEntity> {
          throw new Error('Function not implemented.');
        },
        softRemove: function (options?: SaveOptions): Promise<UserEntity> {
          throw new Error('Function not implemented.');
        },
        recover: function (options?: SaveOptions): Promise<UserEntity> {
          throw new Error('Function not implemented.');
        },
        reload: function (): Promise<void> {
          throw new Error('Function not implemented.');
        }
      };

      jest.spyOn(userService, 'findUserById').mockResolvedValue(userMocked);

      const result = await userController.findUserById(id);
      expect(result).toEqual(userMocked);
    });
  });

  describe('remove', () => {
    it('should be remove a user', async () => {
      const users: UserEntity[] = [
        {
          id: 1,
          username: 'Jose',
          email: 'jose@gmail.com',
          password: '1234',
          isAdmin: true,
          hasId: function (): boolean {
            throw new Error('Function not implemented.');
          },
          save: function (options?: SaveOptions): Promise<UserEntity> {
            throw new Error('Function not implemented.');
          },
          remove: function (options?: RemoveOptions): Promise<UserEntity> {
            throw new Error('Function not implemented.');
          },
          softRemove: function (options?: SaveOptions): Promise<UserEntity> {
            throw new Error('Function not implemented.');
          },
          recover: function (options?: SaveOptions): Promise<UserEntity> {
            throw new Error('Function not implemented.');
          },
          reload: function (): Promise<void> {
            throw new Error('Function not implemented.');
          }
        },
        {
          id: 2,
          username: 'Pedro',
          email: 'pedro@gmail.com',
          password: '1234',
          isAdmin: false,
          hasId: function (): boolean {
            throw new Error('Function not implemented.');
          },
          save: function (options?: SaveOptions): Promise<UserEntity> {
            throw new Error('Function not implemented.');
          },
          remove: function (options?: RemoveOptions): Promise<UserEntity> {
            throw new Error('Function not implemented.');
          },
          softRemove: function (options?: SaveOptions): Promise<UserEntity> {
            throw new Error('Function not implemented.');
          },
          recover: function (options?: SaveOptions): Promise<UserEntity> {
            throw new Error('Function not implemented.');
          },
          reload: function (): Promise<void> {
            throw new Error('Function not implemented.');
          }
        },
      ]
      const userPromise = new Promise(() => {
        return users[1]
      });

      jest.spyOn(userService, 'remove').mockReturnValue(userPromise);

      const userRemoved = await userController.remove(users[1].id);
      expect(users[1]).not.toContain(users);
      expect(userRemoved).toEqual(users[1]);


    })
  })

});