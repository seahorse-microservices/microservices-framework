import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { CreateUserDto } from '../dto/create-user.dto';
import { AuthService } from '../services/auth.service';
import { UserService } from '../../user/services/user.service';
import { JwtService } from '@nestjs/jwt';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../user/entities/user.entity';
import { Repository } from 'typeorm';
import { SignInDto } from '../dto/signin-user.dto';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { CaslModule } from '../../casl/casl.module';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        UserService,
        JwtService,
        {
          provide: getRepositoryToken(UserEntity),
          useClass: Repository
        }
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
        CaslModule,
      ]
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);

  });


  it('should be defined', () => {
    expect(authController).toBeDefined();
  });

  describe('login', () => {
    it('should be return a token and a user', async () => {
      const newUser: SignInDto = {
        username: 'Pepe',
        password: '1234'
      };
      const user: SignInDto = {
        username: 'Pepe',
        password: '1234'
      }

      const tokenPromise = new Promise(() => {
        return {
          access_token: 'Bearer J12J119HDAU1314NH11BJ',
          user: user
        };
      })

      jest.spyOn(authService, 'signIn').mockReturnValue(tokenPromise)

      expect(newUser).toEqual(user);
      expect(await authController.signIn(newUser)).toEqual(tokenPromise);
    })
  })

  describe('signup', () => {
    it('should be return a token and a user', async () => {
      const newUser: CreateUserDto = {
        id: 1,
        username: 'Juan',
        email: 'juan@gmail.com',
        password: '1234',
        isAdmin: false
      }

      const user: CreateUserDto = {
        id: 1,
        username: 'Juan',
        email: 'juan@gmail.com',
        password: '1234',
        isAdmin: false
      }

      const tokenPromise = new Promise(() => {
        return {
          access_token: 'Bearer J12J119HDAU1314NH11BJ',
          user: user
        };
      });

      jest.spyOn(authService, 'signUp').mockReturnValue(tokenPromise)

      expect(newUser).toEqual(user)
      expect(await authController.create(newUser)).toEqual(tokenPromise)

    })
  })

});
