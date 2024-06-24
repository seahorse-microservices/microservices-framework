import { Controller, Post, Body, Get, Patch, Param, Delete, Put, UnauthorizedException, HttpStatus, HttpCode } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { SignInRequest } from './dto/sign-in-request.dto';
import { SignInResponse } from './dto/sign-in-response.dto';
import { ApiExtraModels, ApiOperation, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { LogInRequest } from './dto/log-in-request.dto';
import { LogInResponse } from './dto/log-in-response.dto';
import { CreateUserResponse } from '../user/dto/create-user-response.dto';
import { CreateUserRequest } from '../user/dto/create-user-request.dto';
import { GetUserResponse } from '../user/dto/get-user-response.dto';
import { GetUserRequest } from '../user/dto/login-user-request.dto';
import { JwtService } from '@nestjs/jwt';
import { Public } from './public.decorator';
@ApiTags("auth")
@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService) {}

  @Post()
  @Public()
  @ApiResponse({status: 201, type: SignInResponse})
  @ApiResponse({ status: 409, description: 'The user already exists.'})
  @ApiOperation({summary: "Hello World"})
  async signIn(@Body() signInRequest: SignInRequest) : Promise<SignInResponse>  {


      const createUserRequest: CreateUserRequest = new CreateUserRequest();
      createUserRequest.name = signInRequest.name;
      createUserRequest.email = signInRequest.email;
      createUserRequest.password = signInRequest.password;

      const createUserResponse: CreateUserResponse = await this.userService.create(createUserRequest);
      const signInResponse :SignInResponse = new SignInResponse();
      signInResponse.name = createUserResponse.name;
      signInResponse.email = createUserResponse.email;
  

    return signInResponse;
  }

  

  @Post("/user")
  @HttpCode(HttpStatus.OK)
  @Public()
  @ApiResponse({status: HttpStatus.OK , type: LogInResponse})
  @ApiResponse({ status: HttpStatus.CONFLICT, description: 'The user already exists.'})
  async logIn(@Body() logInRequest: LogInRequest): Promise<LogInResponse> {


      const getUserRequest: GetUserRequest = new GetUserRequest();
      getUserRequest.email = logInRequest.email;
      getUserRequest.password = logInRequest.password;
      const getUserResponse: GetUserResponse = await this.userService.findByEmailAndPassword(getUserRequest);

      if (!getUserResponse) {throw new UnauthorizedException();}



      const logInResponse :LogInResponse = new  LogInResponse();
      logInResponse.email = getUserResponse.email;
      logInResponse.name = getUserResponse.name;
      logInResponse.id = getUserResponse.id;
      logInResponse.accessToken = await this.jwtService.signAsync({ sub: getUserResponse.id, username: getUserResponse.name });

    return logInResponse;
  }


}


  // @Put("/user")
  // logOut(@Body() createAuthDto: SignInRequest) {
  //  return this.authService.logIn(createAuthDto);
  // }

  // @Put()
  // @ApiResponse({status: 201, schema: { $ref: getSchemaPath(SignInResponse),},})
  // @ApiResponse({ status: 200, description: 'The user have been deleted.'})
  // @ApiResponse({ status: 404, description: 'The user have not been found.'})
  // @ApiExtraModels(SignInResponse)
  // signOut(@Body() signInRequest: SignInRequest) : SignInResponse {
  //   return this.authService.signIn(signInRequest);
  // }


 




  


