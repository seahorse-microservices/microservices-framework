import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from '../services/auth.service';
import { SignInDto } from '../dto/signin.dto';

describe('AuthController', () => {
    let authController: AuthController;
    let authService: AuthService;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AuthController],
            providers: [AuthService],
        }).compile();

        authController = app.get<AuthController>(AuthController);
        authService = app.get<AuthService>(AuthService);
    });


    it('should be defined', () => {
        expect(authController).toBeDefined();
    });


    describe('signin', () => {
        it('should be return a token', async () => {
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
                    access_token: 'Bearer J12J119HDAU1314NH11BJ'
                };
            })

            jest.spyOn(authService, 'signIn').mockReturnValue(tokenPromise)

            expect(newUser).toEqual(user);
            expect(await authController.signIn(newUser)).toEqual(tokenPromise)
        })
    })
});